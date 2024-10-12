import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../button";

function Hero() {
  return (
    <div className=" flex flex-col items-center mx-56 gap-9">
      <h1 className="font-extrabold text-[45px] text-center mt-16">
        <span className="text-[#f56551]">
          Discover your next adventure with AI :
        </span>{" "}
        <br /> Personalized Itineraries at your Fingertips
      </h1>
      <p className="text-xl text-gray-500 text-center">
        Your personal trip planner and travel curato, creating custom
        itineraries tailored to your interests and budget.
      </p>
      <Link to="/create-trip">
        <Button>Get Started</Button>
      </Link>
    </div>
  );
}

export default Hero;
