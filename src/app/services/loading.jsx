// src/app/services/loading.jsx

import ServiceCardSkeleton from "@/components/Servicecardskeleton";

export default function Loading() {
  return (
    <div>
      <ServiceCardSkeleton />
      <ServiceCardSkeleton />
      <ServiceCardSkeleton />
    </div>
  );
}