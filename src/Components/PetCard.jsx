// components/PetCard.jsx
import React from 'react';

const PetCard = ({ pet, onLike, onView }) => {
  return (
    <div className="card card-compact border rounded-md p-4">
      <figure className="h-[200px] rounded-md overflow-hidden">
        <img src={pet.image} alt={pet.pet_name} className="w-full h-full object-cover" />
      </figure>
      <div className="border-b pb-3 text-left">
        <h1 className="text-xl font-bold pt-3">{pet.pet_name}</h1>
        <p className="text-sm text-[#131313B3] pt-1">Breed: {pet.breed}</p>
        <p className="text-sm text-[#131313B3] pt-1">Birth: {pet.date_of_birth}</p>
        <p className="text-sm text-[#131313B3] pt-1">Gender: {pet.gender}</p>
        <p className="text-sm text-[#131313B3] pt-1">Price: ${pet.price}</p>
      </div>
      <div className="card-actions pt-3 flex justify-around">
        <button onClick={onLike} className="btn bg-white hover:bg-green-400">
          <img src="https://img.icons8.com/?size=24&id=u8MTpAq972MG&format=png" alt="like" />
        </button>
        <button onClick={() => document.getElementById('countdownButton').click()} className="btn bg-white text-[#0E7A81]">Adopt</button>
        <button onClick={onView} className="btn bg-white text-[#0E7A81]">Details</button>
      </div>
    </div>
  );
};

export default PetCard;
