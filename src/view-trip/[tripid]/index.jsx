import { db } from "@/service/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import InfoSection from "./Components/InfoSection";

function ViewTrip() {
  const { tripid } = useParams();
  const [trip, setTrip] = useState([]);

  useEffect(() => {
    tripid && GetTripData();
  }, [tripid]);
  const GetTripData = async () => {
    const docRef = doc(db, "Trips", tripid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log(docSnap.data());
      setTrip(docSnap.data());
    } else {
      console.log("No data found");
      toast("No trip found");
    }
  };

  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      {
        // Information Section
        <InfoSection trip={trip} />
        // Hotels
        // Itenary
      }
    </div>
  );
}

export default ViewTrip;
