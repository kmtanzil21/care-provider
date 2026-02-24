export default function Loading() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 py-10 px-4 animate-pulse">

      {/* Back button skeleton */}
      <div className="max-w-6xl mx-auto mb-6">
        <div className="h-4 w-32 bg-purple-200 rounded"></div>
      </div>


      {/* Card skeleton */}
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden bg-white shadow-2xl border border-purple-100">

        <div className="flex flex-col lg:flex-row min-h-[600px]">

          {/* LEFT IMAGE SKELETON */}
          <div className="lg:w-[45%] h-[320px] lg:h-auto bg-purple-200 relative">

            {/* badge */}
            <div className="absolute top-5 left-5 h-6 w-24 bg-purple-300 rounded-full"></div>

            {/* icon */}
            <div className="absolute bottom-6 left-6 h-14 w-14 bg-purple-300 rounded-2xl"></div>

            {/* price */}
            <div className="absolute bottom-6 right-6 h-10 w-20 bg-purple-300 rounded-xl"></div>

          </div>


          {/* RIGHT CONTENT SKELETON */}
          <div className="flex-1 p-8 lg:p-10">

            {/* Title */}
            <div className="h-8 w-64 bg-purple-300 rounded mb-4"></div>

            {/* tagline */}
            <div className="h-4 w-40 bg-purple-200 rounded mb-4"></div>

            {/* divider */}
            <div className="h-1 w-14 bg-purple-300 rounded mb-5"></div>

            {/* description lines */}
            <div className="space-y-2 mb-6">

              <div className="h-4 bg-purple-200 rounded"></div>

              <div className="h-4 bg-purple-200 rounded"></div>

              <div className="h-4 w-5/6 bg-purple-200 rounded"></div>

            </div>


            {/* features */}
            <div className="grid grid-cols-2 gap-3 mb-6">

              {[...Array(6)].map((_, i) => (

                <div key={i} className="h-4 bg-purple-200 rounded"></div>

              ))}

            </div>


            {/* pills */}
            <div className="flex gap-3 mb-8">

              <div className="h-8 w-32 bg-purple-200 rounded-full"></div>

              <div className="h-8 w-32 bg-purple-200 rounded-full"></div>

              <div className="h-8 w-32 bg-purple-200 rounded-full"></div>

            </div>


            {/* pricing box */}
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5 flex flex-col sm:flex-row gap-5">

              {/* price */}
              <div className="space-y-2">

                <div className="h-4 w-24 bg-purple-200 rounded"></div>

                <div className="h-8 w-32 bg-purple-300 rounded"></div>

              </div>


              {/* buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full">

                <div className="h-12 bg-purple-300 rounded-2xl w-full"></div>

                <div className="h-12 bg-purple-200 rounded-2xl w-full"></div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}