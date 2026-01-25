import React, { useEffect, useState } from 'react';

const Adopt = () => {
  const [adoptedPets, setAdoptedPets] = useState([]);
  const [formData, setFormData] = useState({
    address: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const storedPets = JSON.parse(localStorage.getItem('adoptedPets')) || [
      {
        id: '1',
        name: 'Bella',
        breed: 'Golden Retriever',
        age: '2 years',
        image: 'https://placedog.net/500?id=1'
      },
      {
        id: '2',
        name: 'Milo',
        breed: 'Beagle',
        age: '1 year',
        image: 'https://placedog.net/500?id=2'
      },

     
    ];
    setAdoptedPets(storedPets);
  }, []);

  console.log(id)
  const removePet = (id) => {
    const updatedPets = adoptedPets.filter(pet => pet.id !== id);
    setAdoptedPets(updatedPets);
    localStorage.setItem('adoptedPets', JSON.stringify(updatedPets));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-11/12 mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Adopted Pets</h2>
      {adoptedPets.length === 0 ? (
        <p className="text-center text-gray-500">No pets adopted yet.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {adoptedPets.map((pet) => (
              <div
                key={pet.id}
                className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 flex flex-col"
              >
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="h-56 w-full object-cover"
                />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{pet.name}</h3>
                    <p className="text-gray-600">Breed: {pet.breed}</p>
                    <p className="text-gray-600">Age: {pet.age}</p>
                  </div>
                  <button
                    onClick={() => removePet(pet.id)}
                    className="btn mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center">Adoption Request Form</h3>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
              >
                Submit Request
              </button>
            </form>
          ) : (
            <div className="text-center mt-10">
              <h3 className="text-2xl font-semibold text-green-700 mb-2">Request Submitted!</h3>
              <p className="text-gray-600">The pet owner will review your request and contact you soon.</p>
              <p className="mt-2 text-blue-600">Status: Ready for pickup 📦 | Contact: 01234-567890</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Adopt;
