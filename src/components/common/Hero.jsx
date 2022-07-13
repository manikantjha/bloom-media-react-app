import React from "react";
import { HeroWrapper } from "../../assets/styles/home/HeroWrapper";

export default function Hero() {
  return (
    <HeroWrapper>
      <img
        className="home-hero"
        src="https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="home hero"
      />
    </HeroWrapper>
  );
}
