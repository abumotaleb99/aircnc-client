import React from "react";
import Heading from "../Heading/Heading";

const Header = () => {
  return (
    <>
      <Heading
        title="Veluvana Bali - Owl Bamboo House"
        subtitle="Sidemen, Indonesia"
      />
      <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
        <img
          className="w-full object-cover"
          src="https://imageio.forbes.com/specials-images/imageserve/675172642/pura-ulun-danu-bratan-temple-in-Bali-/960x0.jpg?format=jpg&width=960"
          alt="header image"
        />
      </div>
    </>
  );
};

export default Header;
