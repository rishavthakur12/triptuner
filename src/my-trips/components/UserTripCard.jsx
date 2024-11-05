import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserTripCard({ trip }) {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);
  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label,
    };
    // CORS issue

    // const result = await GetPlaceDetails(data).then((resp) => {
    //   console.log(resp.data);
    //   const PhotoUrl = PHOTO_REF_URL.replace(
    //     "{NAME}",
    //     resp.data.places[0].photos[2].name
    //   );
    //   setPhotoUrl(PhotoUrl);
    // });
  };
  return (
    <Link to={"/view-trip/" + trip?.id}>
      <div className="cursor-pointer hover:scale-95 transition-all">
        <img src="/placeholder.jpg" className="object-cover rounded-xl " />
        <div>
          <h2 className="font-bold text-sm text-black">
            {trip?.userSelection?.location?.label}
          </h2>
          <h2 className="text-sm text-gray-500">
            No of Days = {trip?.userSelection?.noOfDays}
            <br />
            No of people = {trip?.userSelection?.travellers}
            <br />
            Budget = {trip?.userSelection?.budget}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default UserTripCard;
