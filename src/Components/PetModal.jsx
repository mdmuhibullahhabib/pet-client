// components/PetModal.jsx
import React, { useEffect, useState } from 'react';

const PetModal = ({ petId, onClose }) => {
  const [pet, setPet] = useState(null);

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
      .then(res => res.json())
      .then(data => setPet(data.petData));
  }, [petId]);

  if (!pet) return null;

  return (
    <dialog open className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <div className="border rounded-md p-4">
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
          <div className="mt-4 text-left">
            <h2 className="text-xl font-bold">Details Information</h2>
            <p className="text-sm text-[#131313B3] pt-1">
              It is a long established fact that a reader will be distracted by the readable content...
            </p>
          </div>
        </div>
        <div className="modal-action flex justify-center">
          <button onClick={onClose} className="btn w-80 bg-[#0E7A811A] text-[#0E7A81]">Cancel</button>
        </div>
      </div>
    </dialog>
  );
};

export default PetModal;
