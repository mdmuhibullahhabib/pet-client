import React from 'react';
import petImage from '../../assets/pet.webp'; // Adjust path as needed

const Banner = () => {
  return (
    <section className="text-center items-center py-10 px-4 bg-white">
      <div className="max-w-3xl mx-auto space-y-6">
        <h3 className="text-lg text-gray-500">Bringing Families Together ❤️‍🔥</h3>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Your Path to Adoption <br className="hidden md:block" /> Starts Here
        </h1>
        <p className="text-gray-700 text-base md:text-lg">
          It is a long established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a.
        </p>
        <button className="btn bg-[#0E7A81] text-white text-lg px-6 hover:bg-[#0d6e75] transition">
          View More
        </button>
      </div>

      <div className="mt-5 flex justify-center">
        <img
          src={petImage}
          alt="Happy pet with adoptive family"
        //   className="w-full max-w-md md:max-w-xl rounded-lg"
        />
      </div>
    </section>
  );
};

export default Banner;
