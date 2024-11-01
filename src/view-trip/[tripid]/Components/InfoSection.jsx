import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { IoIosSend } from "react-icons/io";
import { GetPlaceDetails } from "@/service/GlobalAPI";
import { PHOTO_REF_URL } from "@/service/GlobalAPI";

function InfoSection({ trip }) {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);
  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label,
    };
    const result = await GetPlaceDetails(data).then((resp) => {
      console.log(resp.data);
      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[2].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };

  return (
    <div>
      <img
        src="/placeholder.jpg" //{photoUrl}
        alt=""
        className="h-[450px] w-full object-cover rounded-xl"
      />
      <div className="my-5 flex flex-col gap-2">
        <h2 className="font-bold text-2xl">
          {trip?.userSelection?.location?.label}
        </h2>
        <div className="flex justify-between items-center">
          <div className=" flex gap-5">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-lg ">
              🗓️{" "}
              {trip?.userSelection?.noOfDays === 1
                ? " 1 Day"
                : `${trip?.userSelection?.noOfDays} Days`}
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-lg ">
              💰 {trip?.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-lg ">
              🧑‍🤝‍🧑 Number of Travellers : {trip?.userSelection?.travellers}
            </h2>
          </div>
          <Button>
            <IoIosSend />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
