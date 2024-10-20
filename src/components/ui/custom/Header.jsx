import React from "react";
import { Button } from "../button";

function Header() {
  return (
    <div className="p-3 shadow-sm flex justify-between items-center w-full">
      <img src="/logo.svg" />
      <div className="font-bold text-xl text-gray-700 ">Triptuner</div>
      <div className="ml-auto">
        <Button>Sign In</Button>
      </div>
    </div>
  );
}

export default Header;
