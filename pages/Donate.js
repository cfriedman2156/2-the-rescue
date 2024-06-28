import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Donate() {

  const [selectedOption, setSelectedOption] = useState('once');

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
              className={`mx-2 py-7 px-8 rounded-full font-bold text-xl shadow-lg focus:outline-none transform transition duration-300 ease-in-out ${selectedOption === 'once'
                ? 'bg-blue-500 text-white scale-105'
                : 'bg-white text-gray-800 hover:bg-gray-200'
                }`}
              onClick={() => setSelectedOption('once')}
            >
              Donate Once
            </button>
            <button
              className={`mx-2 py-7 px-8 rounded-full font-bold text-xl shadow-lg focus:outline-none transform transition duration-300 ease-in-out ${selectedOption === 'monthly'
                ? 'bg-blue-500 text-white scale-105'
                : 'bg-white text-gray-800 hover:bg-gray-200'
                }`}
              onClick={() => setSelectedOption('monthly')}
            >
              Donate Monthly
            </button>
          </div>
          <div className='pt-14 pb-12 flex justify-center flex-wrap'>
            <button className="w-72 h-72 mx-2 py-7 px-8 rounded-3xl font-bold text-xl shadow-lg focus:outline-none transform transition duration-300 ease-in-out bg-white hover:bg-gray-200">
              <div className="py-8 text-center">
                <h2 className="text-5xl font-bold pb-7">$5</h2>
                <p>{selectedOption === 'once' ? 'One Time Donation' : 'Monthly Donation'}</p>

              </div>
            </button>
            <button className="w-72 h-72 mx-2 py-7 px-8 rounded-3xl font-bold text-xl shadow-lg focus:outline-none transform transition duration-300 ease-in-out bg-white hover:bg-gray-200">
              <div className="py-8 text-center">
                <h2 className="text-5xl font-bold pb-7">$10</h2>
                <p>{selectedOption === 'once' ? 'One Time Donation' : 'Monthly Donation'}</p>

              </div>
            </button>
            <button className="w-72 h-72 mx-2 py-7 px-8 rounded-3xl font-bold text-xl shadow-lg focus:outline-none transform transition duration-300 ease-in-out bg-white hover:bg-gray-200">
              <div className="py-8 text-center">
                <h2 className="text-5xl font-bold pb-7">$25</h2>
                <p>{selectedOption === 'once' ? 'One Time Donation' : 'Monthly Donation'}</p>

              </div>
            </button>
            <button className="w-72 h-72 mx-2 py-7 px-8 rounded-3xl font-bold text-xl shadow-lg focus:outline-none transform transition duration-300 ease-in-out bg-white hover:bg-gray-200">
              <div className="py-8 text-center">
                <h2 className="text-5xl font-bold pb-7">Custom</h2>
                <p>{selectedOption === 'once' ? 'One Time Donation' : 'Monthly Donation'}</p>

              </div>
            </button>
          </div>
        </section>
        <section className='pb-14'>
          <h2 className="w-full my-2 text-6xl font-bold leading-tight text-center text-white">
            Prefer <img src='/images/Venmo_Logo.svg.png' alt='Venmo Logo' className="inline-block h-9 pl-3" />?
          </h2>
          <p className="w-full my-2 text-3xl font-bold leading-tight text-center text-white">
            Venmo your donation to @donate2therescueanimalsanctuary
          </p>
        </section>
        <section className="relative -mt-12 lg:-mt-24">
          <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fillRule="nonzero">
                <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
                <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
              </g>
              <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fillRule="nonzero">
                <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
              </g>
            </g>
          </svg>
        </section>
        <Footer />
      </main>
    </>
  )
}





{/* <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
            <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-lg bg-white mt-4 ">
              <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                <div className="p-8 text-3xl font-bold text-center border-b-4">
                  $5
                </div>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="flex items-center justify-center">
                  <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Donate
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-lg bg-white mt-4">
              <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                <div className="p-8 text-3xl font-bold text-center border-b-4">
                  $10
                </div>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">

                <div className="flex items-center justify-center">
                  <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Donate
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-lg bg-white mt-4">
              <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                <div className="p-8 text-3xl font-bold text-center border-b-4">
                  $25
                </div>

              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">

                <div className="flex items-center justify-center">
                  <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Donate
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <div className="w-full p-8 text-3xl font-bold text-center">Custom</div>
                <div className="h-1 w-full gradient my-0 py-0 rounded-t"></div>
                <label className="mt-4 m-3 input input-bordered flex items-center gap-2">
                  $
                  <input type="text" className="grow" placeholder="50" />
                </label>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">

                <div className="flex items-center justify-center">
                  <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Donate
                  </button>
                </div>
              </div>
            </div>
          </div> */}