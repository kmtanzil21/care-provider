"use client";

import { useMemo, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { createBooking } from "@/actions/server/bookings";

export default function BookingForm({ service }) {

  const router = useRouter();

  const [durationType, setDurationType] = useState("hour"); // hour | day
  const [durationValue, setDurationValue] = useState(1);

  const [location, setLocation] = useState({
    division: "",
    district: "",
    city: "",
    area: "",
    address: "",
  });

  const unitPrice = durationType === "hour"
    ? Number(service.pricePerHour || 0)
    : Number(service.pricePerDay || 0);

  const totalCost = useMemo(() => {
    const d = Number(durationValue || 0);
    if (!d || d <= 0) return 0;
    return d * unitPrice;
  }, [durationValue, unitPrice]);

  const handleChange = (field, value) => {
    setLocation(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    // basic validation
    if (!durationValue || Number(durationValue) <= 0) {
      Swal.fire("Error", "Please select a valid duration", "error");
      return;
    }

    if (!location.division || !location.district || !location.city || !location.area || !location.address) {
      Swal.fire("Error", "Please fill all location fields", "error");
      return;
    }

    const confirm = await Swal.fire({
      title: "Confirm Booking?",
      html: `
        <div style="text-align:left">
          <p><b>Service:</b> ${service.title}</p>
          <p><b>Duration:</b> ${durationValue} ${durationType}(s)</p>
          <p><b>Total Cost:</b> ৳${totalCost} (${service.currency || "BDT"})</p>
          <p><b>Status:</b> Pending</p>
        </div>
      `,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Book Now",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#7c3aed", // purple
    });

    if (!confirm.isConfirmed) return;

    try {

      const res = await createBooking({
        serviceId: service._id,
        durationType,
        durationValue,
        location,
      });

      await Swal.fire({
        title: "Booking Created!",
        text: `Your booking is Pending. Total: ৳${res.totalCost}`,
        icon: "success",
        confirmButtonColor: "#7c3aed",
      });

      // redirect to my bookings page (you will create it)
      router.push("/my-bookings");

    } catch (err) {

      Swal.fire("Error", err.message || "Booking failed", "error");

    }

  };

  return (

    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Duration */}
      <div className="grid sm:grid-cols-2 gap-4">

        <div>
          <label className="text-sm font-bold text-purple-600">
            Duration Type
          </label>

          <select
            value={durationType}
            onChange={(e) => setDurationType(e.target.value)}
            className="select select-bordered w-full mt-2"
          >
            <option value="hour">Hour</option>
            <option value="day">Day</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-bold text-purple-600">
            Duration ({durationType}s)
          </label>

          <input
            type="number"
            min="1"
            value={durationValue}
            onChange={(e) => setDurationValue(e.target.value)}
            className="input input-bordered w-full mt-2"
          />
        </div>

      </div>


      {/* Location */}
      <div className="grid sm:grid-cols-2 gap-4">

        <div>
          <label className="text-sm font-bold text-purple-600">
            Division
          </label>
          <input
            value={location.division}
            onChange={(e) => handleChange("division", e.target.value)}
            className="input input-bordered w-full mt-2"
            placeholder="Dhaka"
          />
        </div>

        <div>
          <label className="text-sm font-bold text-purple-600">
            District
          </label>
          <input
            value={location.district}
            onChange={(e) => handleChange("district", e.target.value)}
            className="input input-bordered w-full mt-2"
            placeholder="Gazipur"
          />
        </div>

        <div>
          <label className="text-sm font-bold text-purple-600">
            City
          </label>
          <input
            value={location.city}
            onChange={(e) => handleChange("city", e.target.value)}
            className="input input-bordered w-full mt-2"
            placeholder="Tongi"
          />
        </div>

        <div>
          <label className="text-sm font-bold text-purple-600">
            Area
          </label>
          <input
            value={location.area}
            onChange={(e) => handleChange("area", e.target.value)}
            className="input input-bordered w-full mt-2"
            placeholder="Cherag Ali"
          />
        </div>

      </div>

      <div>
        <label className="text-sm font-bold text-purple-600">
          Full Address
        </label>
        <textarea
          value={location.address}
          onChange={(e) => handleChange("address", e.target.value)}
          className="textarea textarea-bordered w-full mt-2"
          placeholder="House, Road, Block..."
        />
      </div>


      {/* Total Cost */}
      <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-purple-400">
            Total Cost
          </p>
          <p className="text-3xl font-extrabold text-purple-700">
            ৳{totalCost}
            <span className="text-base font-medium text-purple-400"> {service.currency || "BDT"}</span>
          </p>
        </div>

        <div className="text-right text-sm text-gray-500">
          <p>Rate: ৳{unitPrice}/{durationType}</p>
          <p>Duration: {durationValue} {durationType}(s)</p>
        </div>
      </div>


      {/* Submit */}
      <button
        type="submit"
        className="w-full py-3.5 rounded-2xl bg-purple-500 hover:bg-purple-600 text-white font-extrabold text-sm transition-all shadow-lg shadow-purple-200 active:scale-95"
      >
        Confirm Booking →
      </button>

    </form>

  );

}