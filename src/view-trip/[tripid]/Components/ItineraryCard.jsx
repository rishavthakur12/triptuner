import React from "react";
import { Link } from "react-router-dom";

function ItineraryCard({ place }) {
  return (
    <Link
      to={"https://www.google.com/maps/search/?api=1&query=" + place?.placeName}
      target="_blank"
    >
      <div className="border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer">
        <img
          src="/placeholder.jpg"
          alt=""
          className="w-[200px] h-[150px] rounded-xl "
        />
        <div>
          <h2 className="font-bold text-lg text-black">{place.placeName}</h2>
          <p className="text-sm text-gray-500">{place.placeDetails}</p>
        </div>
      </div>
    </Link>
  );
}

export default ItineraryCard;
