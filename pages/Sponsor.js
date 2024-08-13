import Nav from '../components/Nav';
import Footer from '@/components/Footer';
import DonateButton from '@/components/DonateButton';
import { GET_ANIMALS } from '@/graphql/queries';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import Loading from '@/components/Loading';

export default function Sponsor() {
  const [selectedOption, setSelectedOption] = useState('once');
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [customAmount, setCustomAmount] = useState('');

  const handleInputChange = (e) => {
    setCustomAmount(e.target.value);
  };

  const { loading, error, data } = useQuery(GET_ANIMALS);

  if (loading) return <Loading/>;
  if (error) return <p>Error: {error.message}</p>;

  const animals = data?.animals || [];

  const handleSelectChange = (event) => {
    const animalId = event.target.value;
    const animal = animals.find((animal) => animal.id === animalId);
    setSelectedAnimal(animal);
  };

  return (
    <>
      <Nav />
      <main className="pt-28 leading-normal tracking-normal text-white gradient" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
        <section className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
          <h2 className="w-full my-2 text-7xl font-bold leading-tight text-center text-white">
            Sponsor an Animal!
          </h2>
          <div className='text-center pb-6'>
            <h3 className="my-4 mx-20 text-xl leading-tight text-white">
              Your generous donations directly support the animals in our care. Every dollar contributes to providing food, shelter, and medical treatment, ensuring our animals remain healthy and comfortable.</h3>
            <h3 className="my-4 mx-40 text-xl leading-tight text-white">
              Your support helps us continue our mission to rescue, rehabilitate, and rehome animals in need. Together, we can make a life-saving difference.
            </h3>
          </div>
          <div className="w-full pb-8">
            <div className="h-1 mx-auto bg-white opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex justify-center mb-4">
            <h3 className='text-white font-semibold text-3xl'>Choose an animal</h3>
          </div>
          <div className='flex justify-center'>
            <select className="select text-xl select-bordered w-full max-w-xs" onChange={handleSelectChange}>
              <option value="" disabled selected>Select an animal</option>
              {animals.map((animal) => (
                <option key={animal.id} value={animal.id}>{animal.name}</option>
              ))}
            </select>
          </div>
          {selectedAnimal && (
            <div className="flex justify-center mt-8">
              <img src={selectedAnimal.profileImage} alt={selectedAnimal.name} className=" h-64 rounded-xl" />
            </div>
          )}
          <div className='pt-14 pb-12 flex justify-center flex-wrap'>
            <div className="w-72 h-72 mx-2 py-7 px-8 rounded-3xl font-bold text-xl shadow-lg bg-white">
              <div className="py-8 text-center">
                <h2 className="text-5xl font-bold pb-4">$5</h2>
                <p>Monthly Sponsorship</p>
                <DonateButton amount={500} interval='monthly' animalName={selectedAnimal?.name} disabled={!selectedAnimal}/>
              </div>
            </div>
            <div className="w-72 h-72 mx-2 py-7 px-8 rounded-3xl font-bold text-xl shadow-lg bg-white">
              <div className="py-8 text-center">
                <h2 className="text-5xl font-bold pb-4">$10</h2>
                <p>Monthly Sponsorship</p>
                <DonateButton amount={1000} interval='monthly' animalName={selectedAnimal?.name} disabled={!selectedAnimal}/>
              </div>
            </div>
            <div className="w-72 h-72 mx-2 py-7 px-8 rounded-3xl font-bold text-xl shadow-lg bg-white">
              <div className="py-8 text-center">
                <h2 className="text-5xl font-bold pb-4">$25</h2>
                <p>Monthly Sponsorship</p>
                <DonateButton amount={2500} interval='monthly' animalName={selectedAnimal?.name} disabled={!selectedAnimal}/>
              </div>
            </div>
            <div className="w-72 h-72 mx-2 py-7 px-8 rounded-3xl font-bold text-xl shadow-lg bg-white">
              <div className="py-8 text-center">
                <h2 className="text-5xl font-bold pb-4">Custom</h2>
                <label className="input input-bordered flex items-center gap-2">
                  $
                  <input
                    type=""
                    className="grow"
                    value={customAmount}
                    onChange={handleInputChange}
                  />
                </label>
                <p>Monthly Sponsorship</p>
                <DonateButton amount={customAmount * 100} interval='monthly' animalName={selectedAnimal?.name} disabled={!selectedAnimal}/>
              </div>
            </div>
          </div>
        </section>
        <section className='pb-14'>
          <h2 className="w-full my-2 text-6xl font-bold leading-tight text-center text-white">
            Prefer <img src='/images/Venmo_Logo.svg.png' alt='Venmo Logo' className="inline-block h-9 pl-3" />?
          </h2>
          <div className='flex justify-center p-4'>
            <img src='/images/venmoqr.jpg' className='h-64 rounded-2xl'/>
          </div>
          <p className="w-full my-2 text-3xl font-bold leading-tight text-center text-white">
            Venmo your donation to @donate2therescueanimalsanctuary
          </p>
        </section>
        <Footer />
      </main>
    </>
  );
}
