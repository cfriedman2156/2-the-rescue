import Nav from '../components/Nav';
import Footer from '@/components/Footer';
import DonateButton from '@/components/DonateButton';
import { useState } from 'react';

export default function Donate() {
  const [selectedOption, setSelectedOption] = useState('once');
  const [customAmount, setCustomAmount] = useState('');

  const handleInputChange = (e) => {
    setCustomAmount(e.target.value);
  };

  return (
    <>
      <Nav />
      <main className="pt-28 leading-normal tracking-normal text-white gradient" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
        <section className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
          <h2 className="w-full my-2 text-7xl font-bold leading-tight text-center text-white">
            Donate!
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
          <div className="flex justify-center mt-8">
            <button
              className={`mx-2 py-7 px-8 rounded-lg font-bold text-xl shadow-lg focus:outline-none transform transition duration-300 ease-in-out ${selectedOption === 'once'
                ? 'bg-blue-500 text-white scale-105'
                : 'bg-white text-gray-800 hover:bg-gray-200'
                }`}
              onClick={() => setSelectedOption('once')}
            >
              Donate Once
            </button>
            <button
              className={`mx-2 py-7 px-8 rounded-lg font-bold text-xl shadow-lg focus:outline-none transform transition duration-300 ease-in-out ${selectedOption === 'monthly'
                ? 'bg-blue-500 text-white scale-105'
                : 'bg-white text-gray-800 hover:bg-gray-200'
                }`}
              onClick={() => setSelectedOption('monthly')}
            >
              Donate Monthly
            </button>
          </div>
          <div className='pt-14 pb-12 flex justify-center flex-wrap'>
            {['500', '2500', '5000'].map(amount => (
              <div key={amount} className="w-72 h-72 mx-2 py-7 px-8 rounded-3xl font-bold text-xl shadow-lg bg-white">
                <div className="py-8 text-center">
                  <h2 className="text-5xl font-bold pb-4">${amount / 100}</h2>
                  <p>{selectedOption === 'once' ? 'One Time Donation' : 'Monthly Donation'}</p>
                  <DonateButton amount={amount} interval={selectedOption} />
                </div>
              </div>
            ))}
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
                <p>{selectedOption === 'once' ? 'One Time Donation' : 'Monthly Donation'}</p>
                <DonateButton amount={customAmount * 100} interval={selectedOption} />
              </div>
            </div>
          </div>
        </section>
        <section className='pb-14'>
          <h2 className="w-full my-2 text-6xl font-bold leading-tight text-center text-white">
            Prefer <img src='/images/Venmo_Logo.svg.png' alt='Venmo Logo' className="inline-block h-9 pl-3" />?
          </h2>
          <div className='flex justify-center p-4'>
            <img src='/images/venmoqr.jpg' className='h-64 rounded-2xl' />
          </div>
          <p className="w-full my-2 text-3xl font-bold leading-tight text-center text-white">
            Venmo your donation to @donate2therescueanimalsanctuary
          </p>
        </section>
        <Footer />
      </main>
    </>
  )
}
