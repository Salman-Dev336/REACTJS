import React from 'react'

const HeroText = () => {
  return (
    <div className="p-6">
        <h3 className="mb-7 text-5xl font-bold leading-[1.2]">
          Prospective <br />{" "}
          <span className="bg-gray-600 text-white rounded-2xl px-5 ">customer </span>
          <br /> segmentation
        </h3>
        <p className="text-lg font-medium text-gray-400">
          We have identified 4 key customer segments that are most likely to
          benefit from our digital banking platform. These segments are based on
          a combination of demographic, behavioral, and psychographic factors,
          and they represent a significant portion of the market for digital
          banking services.
        </p>
      </div>
  );
};

export default HeroText