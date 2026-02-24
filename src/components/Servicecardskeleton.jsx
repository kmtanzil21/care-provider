export default function ServiceCardSkeleton() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-purple-100 shadow-xl shadow-purple-200 max-w-150 mt-10 mb-10 w-full mx-auto animate-pulse">

      {/* ── IMAGE SKELETON ── */}
      <div className="relative h-72 bg-purple-100">
        {/* Badge skeleton */}
        <div className="absolute top-3 left-3 h-6 w-24 bg-purple-200 rounded-full" />

        {/* Icon + Price skeleton */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <div className="w-10 h-10 bg-purple-200 rounded-full" />
          <div className="w-24 h-7 bg-purple-200 rounded-full" />
        </div>
      </div>

      {/* ── BODY SKELETON ── */}
      <div className="p-6 flex flex-col gap-3">

        {/* Title + Rating */}
        <div className="flex items-start justify-between gap-2">
          <div className="h-6 bg-purple-100 rounded-lg w-32" />
          <div className="h-4 bg-purple-100 rounded-lg w-16 shrink-0" />
        </div>

        {/* Tagline */}
        <div className="h-3 bg-purple-100 rounded-lg w-48" />

        {/* Description lines */}
        <div className="flex flex-col gap-2">
          <div className="h-3 bg-purple-100 rounded-lg w-full" />
          <div className="h-3 bg-purple-100 rounded-lg w-full" />
          <div className="h-3 bg-purple-100 rounded-lg w-3/4" />
        </div>

        {/* Features */}
        <div className="flex flex-col gap-2 mt-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-200 shrink-0" />
              <div className="h-3 bg-purple-100 rounded-lg" style={{ width: `${[70, 85, 60][i]}%` }} />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-2 h-11 bg-purple-200 rounded-2xl w-full" />

      </div>
    </div>
  );
}