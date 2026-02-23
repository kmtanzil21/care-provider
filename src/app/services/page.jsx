import { getAllServices } from "@/actions/server/services";
import ServiceCard from "@/components/ServiceCard";

export default async function ServicesPage() {
  const services = await getAllServices();

  return (
    <div>
      {services.map((s) => <ServiceCard key={s._id} service={s} />)}
    </div>
  );
}