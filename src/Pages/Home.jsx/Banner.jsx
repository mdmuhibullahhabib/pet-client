import React from 'react';
import petImage from '../../assets/pet.webp';

const Banner = () => {
    return (
        <section className="text-center items-center py-10 px-4 bg-white">
            <div className="max-w-3xl mx-auto space-y-6">
                <h3 className="text-lg text-gray-500">Bringing Families Together ❤️‍🔥</h3>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Your Path to Adoption <br className="hidden md:block" /> Starts Here
                </h1>
                <p className="text-gray-700 text-base md:text-lg">
                    Discover a loving journey where every step brings you closer to building a family. We're here to guide you with compassion, care, and a commitment to making adoption a beautiful beginning.
                </p>
                {/* btn text-white text-l bg-[#0E7A81] */}
                <button className="btn bg-[#0E7A81] text-white text-lg px-6 hover:bg-[#18181b] transition">
                    View More
                </button>
            </div>

            <div className="mt-2 flex justify-center">
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
