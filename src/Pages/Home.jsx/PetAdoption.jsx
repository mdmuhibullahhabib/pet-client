// App.jsx
import React, { useEffect, useState } from 'react';
import CategoryNav from '../../Components/CategoryNav';
import PetCard from '../../Components/PetCard';
import PetModal from '../../Components/PetModal';
import AdoptModal from '../../Components/AdoptModal';
// import PetCard from '../../components/PetCard';
// import PetModal from '../../components/PetModal';
// import AdoptModal from '../../components/AdoptModal';

const PetAdoption = () => {
  const [categories, setCategories] = useState([]);
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [likedPets, setLikedPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortDesc, setSortDesc] = useState(false);

  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
      .then(res => res.json())
      .then(data => setCategories(data.categories));

    loadAllPets();
  }, []);

  const loadAllPets = () => {
    setLoading(true);
    setTimeout(() => {
      fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(res => res.json())
        .then(data => {
          setPets(data.pets);
          setLoading(false);
        });
    }, 1500);
  };

  const loadCategoryPets = (category) => {
    setLoading(true);
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
      .then(res => res.json())
      .then(data => {
        setPets(data.data);
        setLoading(false);
      });
  };

  const sortPets = () => {
    const sorted = [...pets].sort((a, b) => sortDesc ? a.price - b.price : b.price - a.price);
    setPets(sorted);
    setSortDesc(!sortDesc);
  };

  const likePet = (image) => {
    setLikedPets(prev => [...prev, image]);
  };

  return (
    <main className="text-center px-4 max-w-7xl mx-auto">
      <section className="space-y-5 my-10">
        <h1 className="text-3xl font-bold">Adopt Your Best Friend</h1>
        <p className="text-[#131313B3]">It is a long established fact that a reader will be distracted by the readable content...</p>
        <CategoryNav categories={categories} onSelect={loadCategoryPets} />
        <div className="flex justify-between mt-6">
          <button className="font-bold">Best Deal For You</button>
          <button onClick={sortPets} className="btn text-white bg-[#0E7A81]">Sort by Price</button>
        </div>
      </section>

      {loading ? (
        <div className="flex justify-center py-10">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <section className="lg:flex space-x-5 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
            {pets.map(pet => (
              <PetCard
                key={pet.petId}
                pet={pet}
                onLike={() => likePet(pet.image)}
                onView={() => setSelectedPet(pet.petId)}
              />
            ))}
          </div>
          <div className="w-28 lg:w-56 border rounded-lg p-2">
            {likedPets.map((img, idx) => (
              <div key={idx} className="w-24 h-24 my-1">
                <img src={img} alt="liked" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </section>
      )}

      {selectedPet && <PetModal petId={selectedPet} onClose={() => setSelectedPet(null)} />}
      <AdoptModal />
    </main>
  );
};

export default PetAdoption;
