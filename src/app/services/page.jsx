import { getAllServices } from "@/actions/server/services";
import ServiceCard from "@/components/ServiceCard";

export const metadata = {
  title: "Services",  // will become "Services | Care Provider"
  description: "Browse our trusted care services — Baby Care, Elderly Care, and Sick Care across Bangladesh.",
};

export default async function ServicesPage() {
  const services = await getAllServices();

  return (
    <div>
      {services.map((s) => <ServiceCard key={s._id} service={s} />)}
    </div>
  );
}