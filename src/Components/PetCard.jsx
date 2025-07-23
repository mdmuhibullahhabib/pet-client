import React from 'react';

const PetCard = ({ pet, onLike, onView }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition duration-300 overflow-hidden">
      <img src={pet.image} alt={pet.pet_name} className="w-full h-48 object-cover rounded-t-xl" />
      <div className="px-4 pt-4 text-left">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{pet.pet_name}</h3>
        <p className="text-sm text-gray-600">Breed: {pet.breed}</p>
        <p className="text-sm text-gray-600">Birth: {pet.date_of_birth}</p>
        <p className="text-sm text-gray-600">Gender: {pet.gender}</p>
        <p className="text-sm text-gray-800 font-medium mt-2">Price: ${pet.price}</p>
      </div>
      <hr className="my-4 mx-3 border-t border-gray-200" />
      <div className="px-4 pb-4 flex justify-between items-center">
        <button
          onClick={onLike}
          className="btn text-red-500 hover:text-red-600 transition"
          title="Like"
        >
          <img src="https://img.icons8.com/?size=24&id=u8MTpAq972MG&format=png" alt="like" />
        </button>
        <button
          onClick={() => document.getElementById('countdownButton').click()}
          className="btn text-sm px-4 py-1 bg-[#0E7A81] text-white rounded hover:bg-[#0c6368]"
        >
          Adopt
        </button>
        <button
          onClick={onView}
          className="btn text-sm px-4 py-1 border border-[#0E7A81] text-[#0E7A81] rounded hover:bg-[#0E7A811A]"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default PetCard;
