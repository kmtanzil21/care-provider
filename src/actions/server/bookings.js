"use server";

import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const createBooking = async ({ serviceId, durationType, durationValue, location }) => {

  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  const servicesCol = await dbConnect("services");
  const bookingsCol = await dbConnect("bookings");

  const service = await servicesCol.findOne({
    _id: new ObjectId(serviceId),
  });

  if (!service) {
    throw new Error("Service not found");
  }

  const duration = Number(durationValue);

  if (!duration || duration <= 0) {
    throw new Error("Invalid duration");
  }

  let totalCost = 0;

  if (durationType === "hour") {
    totalCost = duration * Number(service.pricePerHour || 0);
  } else if (durationType === "day") {
    totalCost = duration * Number(service.pricePerDay || 0);
  } else {
    throw new Error("Invalid duration type");
  }

  const doc = {
    userId: new ObjectId(session.user.id),
    userEmail: session.user.email,

    serviceId: new ObjectId(serviceId),
    serviceTitle: service.title,
    serviceSlug: service.slug,

    durationType,
    durationValue: duration,

    location, // {division,district,city,area,address}

    totalCost,
    currency: service.currency || "BDT",

    status: "Pending",

    createdAt: new Date(),
  };

  const result = await bookingsCol.insertOne(doc);

  return {
    insertedId: result.insertedId.toString(),
    totalCost,
  };
};