import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export default async function BookingDetailsPage({ params }) {

  const { id } = await params;

  const bookingsCol = await dbConnect("bookings");

  const booking = await bookingsCol.findOne({
    _id: new ObjectId(id),
  });

  if (!booking) {
    return <div>Booking not found</div>;
  }

  return (

    <div className="min-h-screen bg-purple-50 p-10">

      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow">

        <h1 className="text-2xl font-bold text-purple-700">
          Booking Details
        </h1>

        <p>Service: {booking.serviceTitle}</p>

        <p>Duration: {booking.durationValue} {booking.durationType}</p>

        <p>Total Cost: ৳{booking.totalCost}</p>

        <p>Status: {booking.status}</p>

        <p>Division: {booking.location.division}</p>

        <p>District: {booking.location.district}</p>

        <p>City: {booking.location.city}</p>

        <p>Area: {booking.location.area}</p>

        <p>Address: {booking.location.address}</p>

      </div>

    </div>

  );
}