import Link from "next/link";
import CancelBookingButton from "@/components/CancelBookingButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const metadata = {
  title: "My Bookings",
};

export default async function MyBookingsPage() {

  // Get session
  const session = await getServerSession(authOptions);

  // Protect route
  if (!session) {
    redirect("/login?callbackUrl=/my-bookings");
  }

  // Connect DB
  const bookingsCol = await dbConnect("bookings");

  // Fetch user bookings
  const bookings = await bookingsCol
    .find({
      userId: new ObjectId(session.user.id),
    })
    .sort({
      createdAt: -1,
    })
    .toArray();


  return (

    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 py-10 px-4">

      <div className="max-w-5xl mx-auto">


        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">

          <h1 className="text-3xl font-extrabold text-purple-700">
            My Bookings
          </h1>

          <Link
            href="/services"
            className="text-purple-600 font-bold hover:underline"
          >
            Browse Services →
          </Link>

        </div>



        {/* EMPTY STATE */}
        {bookings.length === 0 && (

          <div className="bg-white p-10 rounded-2xl shadow border border-purple-100 text-center">

            <p className="text-4xl mb-3">📭</p>

            <h2 className="text-xl font-bold text-gray-900">
              No bookings yet
            </h2>

            <p className="text-gray-500 mt-2">
              Book a service to see it here
            </p>

            <Link href="/services">

              <button className="mt-5 px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-bold shadow-lg">
                Book Service
              </button>

            </Link>

          </div>

        )}



        {/* BOOKINGS LIST */}
        <div className="space-y-4">

          {bookings.map((b) => (

            <div
              key={b._id.toString()}
              className="bg-white p-6 rounded-2xl shadow border border-purple-100 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4"
            >


              {/* LEFT SIDE */}
              <div>

                <h2 className="text-xl font-bold text-gray-900">
                  {b.serviceTitle}
                </h2>


                <p className="text-sm text-gray-500 mt-1">
                  Duration: {b.durationValue} {b.durationType}(s)
                </p>


                <p className="text-sm text-gray-500">
                  Location:{" "}
                  {b.location?.division},{" "}
                  {b.location?.district},{" "}
                  {b.location?.city}
                </p>


                <p className="font-extrabold text-purple-700 mt-2">
                  Total: ৳{b.totalCost} {b.currency || "BDT"}
                </p>


                <p className="mt-2 text-sm font-semibold">

                  Status:{" "}

                  <span
                    className={

                      b.status === "Cancelled"
                        ? "text-red-500"

                        : b.status === "Approved"
                        ? "text-green-600"

                        : "text-orange-500"

                    }
                  >
                    {b.status}
                  </span>

                </p>

              </div>



              {/* RIGHT SIDE BUTTONS */}
              <div className="flex gap-3">

                {/* View Details */}
                <Link href={`/my-bookings/${b._id.toString()}`}>

                  <button className="px-4 py-2 rounded-xl border border-purple-300 text-purple-600 hover:bg-purple-50 font-bold text-sm transition">
                    View Details
                  </button>

                </Link>
                



                {/* Cancel Booking */}
                <CancelBookingButton
                  bookingId={b._id.toString()}
                  status={b.status}
                />

              </div>


            </div>

          ))}

        </div>


      </div>

    </div>

  );

}