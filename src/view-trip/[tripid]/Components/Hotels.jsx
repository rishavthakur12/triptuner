import React from "react";

function Hotels({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-xl mt-10">Hotel Recommendations</h2>
      <div className="grid grid-cols-2 gap-5">
        {trip?.tripData?.hotelOptions?.map((hotel, index) => (
          <div
            key={index}
            className="hover:scale-105 transition-all cursor-pointer"
          >
            <img src="/placeholder.jpg" className="rounded-lg" />
            <div className="my-2 flex flex-col gap-2">
              <h2 className="font-medium">{hotel?.hotelName}</h2>
              <h2 className="text-s text-gray-500">📍 {hotel?.hotelAddress}</h2>
              <h2 className="text-sm">💰 {hotel?.hotelPrice}</h2>
              <h2 className="text-sm">⭐ {hotel?.hotelRating}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
