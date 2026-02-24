import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export default async function MyBookingsPage() {

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const bookingsCol = await dbConnect("bookings");

  const bookings = await bookingsCol
    .find({ userId: new ObjectId(session.user.id) })
    .sort({ createdAt: -1 })
    .toArray();

  return (
    <div className="min-h-screen bg-purple-50 p-10">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold text-purple-700 mb-6">
          My Bookings
        </h1>

        <div className="space-y-4">

          {bookings.map((b) => (
            <div key={b._id.toString()} className="bg-white p-6 rounded-2xl shadow border border-purple-100">

              <h2 className="text-xl font-bold">{b.serviceTitle}</h2>

              <p className="text-sm text-gray-500">
                Duration: {b.durationValue} {b.durationType}(s)
              </p>

              <p className="text-sm text-gray-500">
                Location: {b.location?.division}, {b.location?.district}, {b.location?.city}, {b.location?.area}
              </p>

              <p className="font-bold text-purple-700 mt-2">
                Total: ৳{b.totalCost} ({b.currency})
              </p>

              <p className="mt-2 text-sm font-semibold">
                Status: <span className="text-orange-500">{b.status}</span>
              </p>

            </div>
          ))}

          {bookings.length === 0 && (
            <div className="text-gray-500">
              No bookings yet.
            </div>
          )}

        </div>

      </div>

    </div>
  );
}