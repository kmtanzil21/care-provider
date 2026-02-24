import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getServiceById } from "@/actions/server/services";
import BookingForm from "./BookingForm";

export default async function BookingPage({ params }) {

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const { id } = await params;

  const service = await getServiceById(id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Service not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 py-10 px-4">

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-purple-100 overflow-hidden">

        <div className="p-8">

          <h1 className="text-3xl font-extrabold text-purple-700">
            Book: {service.title}
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Choose duration, location, and confirm booking (Status: Pending)
          </p>

          <div className="mt-6">
            <BookingForm service={service} />
          </div>

        </div>

      </div>

    </div>
  );
}