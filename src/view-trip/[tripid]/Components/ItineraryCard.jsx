import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalAPI";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ItineraryCard({ place }) {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    place && GetPlacePhoto();
  }, [place]);
  const GetPlacePhoto = async () => {
    const data = {
      textQuery: place?.placeName,
    };
    const result = await GetPlaceDetails(data).then((resp) => {
      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[2].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };
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
