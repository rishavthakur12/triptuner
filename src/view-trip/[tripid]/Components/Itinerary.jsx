import React from "react";
import ItineraryCard from "./ItineraryCard";

function Itinerary({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-lg my-5">Itinerary</h2>
      <div>
        {trip?.tripData?.itinerary?.map((item, index) => (
          <div key={index} className="mt-5">
            <h2 className="font-bold text-lg">{item.day}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {item.plan.map((place, index) => (
                <div key={index}>
                  <h2 className=" font-bold text-sm text-orange-600">
                    {place.time}
                  </h2>
                  <ItineraryCard place={place} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Itinerary;
