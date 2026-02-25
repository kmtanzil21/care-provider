"use server";

import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { sendBookingEmail } from "@/lib/sendEmail"; // import

export const createBooking = async ({
  serviceId,
  durationType,
  durationValue,
  location,
}) => {

  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("Unauthorized");
  }

  const servicesCol = await dbConnect("services");
  const bookingsCol = await dbConnect("bookings");

  const service = await servicesCol.findOne({
    _id: new ObjectId(serviceId),
  });

  const duration = Number(durationValue);

  let totalCost = 0;

  if (durationType === "hour") {
    totalCost = duration * service.pricePerHour;
  } else {
    totalCost = duration * service.pricePerDay;
  }

  const bookingDoc = {

    userId: new ObjectId(session.user.id),

    userEmail: session.user.email,

    serviceId: new ObjectId(serviceId),

    serviceTitle: service.title,

    durationType,

    durationValue: duration,

    location,

    totalCost,

    status: "Pending",

    createdAt: new Date(),

  };

  const result = await bookingsCol.insertOne(bookingDoc);

  // SEND EMAIL HERE
  await sendBookingEmail({

    to: session.user.email,

    serviceTitle: service.title,

    durationType,

    durationValue: duration,

    totalCost,

    location,

  });

  return {

    insertedId: result.insertedId.toString(),

    totalCost,

  };

};