import React, { useEffect, useState } from "react";
import { Button } from "../button";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";

function Header() {
  const handleLogout = () => {
    googleLogout();
    localStorage.clear();
    window.location.href = "/";
  };
  const [openDialogue, setOpenDialogue] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    console.log(user);
  }, []);
  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });
  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data));
        setOpenDialogue(false);
        window.location.reload();
      });
  };

  const handleClose = () => {
    setOpenDialogue(false);
  };

  return (
    <div className="p-3 shadow-sm flex justify-between items-center w-full">
      <a href="/" className="flex items-center ">
        <img src="/logo.svg" />
        <div className="font-bold text-xl text-gray-700 ">Triptuner</div>
      </a>
      <div className="ml-auto">
        {user ? (
          <div className="flex items-center gap-3">
            <a href="/create-trip" className="text-black">
              <Button variant="outline" className="rounded-full">
                Create New Trip
              </Button>
            </a>
            <a href="/my-trips" className="text-black">
              <Button variant="outline" className="rounded-full">
                My Trips
              </Button>
            </a>

            <Popover>
              <PopoverTrigger className="bg-white rounded-full p-0">
                <img
                  className="h-[35px] w-[35px] rounded-full"
                  src={user?.picture}
                  alt=""
                />
              </PopoverTrigger>
              <PopoverContent>
                <h2
                  className="cursor-pointer"
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Logout
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={() => setOpenDialogue(true)}>Sign In</Button>
        )}
      </div>
      <Dialog open={openDialogue} onOpenChange={setOpenDialogue}>
        <DialogOverlay onClick={handleClose} />
        <DialogContent>
          <DialogTitle />
          <DialogHeader>
            <DialogDescription>
              <div className="flex items-center justify-center">
                <img src="/logo.svg" alt="Logo" />
              </div>
              <h2 className="font-bold text-lg mt-7">Sign In with Google</h2>
              <p>Sign in to the App with google authentication securely.</p>
              <Button
                onClick={login}
                className="w-full mt-5 flex gap-4 items-center"
              >
                <FcGoogle className="h-6 w-6" />
                Sign In with Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Header;
