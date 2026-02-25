"use server";

import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { sendBookingEmail } from "@/lib/sendEmail";



/* =====================================================
   CREATE BOOKING
===================================================== */
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

  const bookingDoc = {

    userId: new ObjectId(session.user.id),

    userEmail: session.user.email,

    serviceId: new ObjectId(serviceId),

    serviceTitle: service.title,

    serviceSlug: service.slug,

    durationType,

    durationValue: duration,

    location,

    totalCost,

    currency: service.currency || "BDT",

    status: "Pending",

    createdAt: new Date(),

  };

  const result = await bookingsCol.insertOne(bookingDoc);


  /* SEND EMAIL */
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



/* =====================================================
   CANCEL BOOKING
===================================================== */
export const cancelBooking = async (bookingId) => {

  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("Unauthorized");
  }

  const bookingsCol = await dbConnect("bookings");

  const booking = await bookingsCol.findOne({
    _id: new ObjectId(bookingId),
  });

  if (!booking) {
    throw new Error("Booking not found");
  }

  if (booking.userId.toString() !== session.user.id) {
    throw new Error("Forbidden");
  }

  if (booking.status === "Cancelled") {
    return true;
  }

  await bookingsCol.updateOne(
    { _id: new ObjectId(bookingId) },
    {
      $set: {
        status: "Cancelled",
        cancelledAt: new Date(),
      },
    }
  );

  return true;

};



/* =====================================================
   GET ALL BOOKINGS FOR CURRENT USER
===================================================== */
export const getUserBookings = async () => {

  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("Unauthorized");
  }

  const bookingsCol = await dbConnect("bookings");

  const bookings = await bookingsCol
    .find({
      userId: new ObjectId(session.user.id),
    })
    .sort({
      createdAt: -1,
    })
    .toArray();


  return bookings.map(b => ({
    ...b,
    _id: b._id.toString(),
    userId: b.userId.toString(),
    serviceId: b.serviceId.toString(),
  }));

};



/* =====================================================
   GET SINGLE BOOKING BY ID
===================================================== */
export const getBookingById = async (bookingId) => {

  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("Unauthorized");
  }

  const bookingsCol = await dbConnect("bookings");

  const booking = await bookingsCol.findOne({
    _id: new ObjectId(bookingId),
  });

  if (!booking) {
    throw new Error("Booking not found");
  }

  if (booking.userId.toString() !== session.user.id) {
    throw new Error("Forbidden");
  }

  return {
    ...booking,
    _id: booking._id.toString(),
    userId: booking.userId.toString(),
    serviceId: booking.serviceId.toString(),
  };

};