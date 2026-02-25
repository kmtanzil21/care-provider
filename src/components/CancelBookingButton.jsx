"use client";

import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { cancelBooking } from "@/actions/server/bookings";

export default function CancelBookingButton({ bookingId, status }) {

  const router = useRouter();

  const isDisabled = status === "Cancelled";

  const handleCancel = async () => {

    if (isDisabled) return;

    const confirm = await Swal.fire({
      title: "Cancel Booking?",
      text: "This action cannot be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Cancel",
      confirmButtonColor: "#ef4444",
    });

    if (!confirm.isConfirmed) return;

    try {

      await cancelBooking(bookingId);

      await Swal.fire(
        "Cancelled!",
        "Your booking has been cancelled.",
        "success"
      );

      router.refresh();

    } catch (error) {

      Swal.fire("Error", error.message, "error");

    }

  };

  return (

    <button
      onClick={handleCancel}
      disabled={isDisabled}
      className={`
        px-4 py-2 rounded-xl font-bold text-sm transition

        ${isDisabled
          ? "border border-gray-300 text-gray-400 bg-gray-100 cursor-not-allowed"
          : "border border-red-300 text-red-600 hover:bg-red-50"
        }
      `}
    >
      {isDisabled ? "Cancelled" : "Cancel Booking"}
    </button>

  );

}