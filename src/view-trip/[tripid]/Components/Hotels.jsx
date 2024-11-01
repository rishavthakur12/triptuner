import React from "react";
import HotelCard from "./HotelCard";
function Hotels({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-xl mt-10">Hotel Recommendations</h2>
      <div className="grid grid-cols-2 gap-5">
        {trip?.tripData?.hotelOptions?.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}

export default Hotels;
