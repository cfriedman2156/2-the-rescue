import Hero from '../components/Hero';
import Nav from '../components/Nav';
import DonateFooter from '@/components/DonateFooter';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Nav />
      <main className="leading-normal tracking-normal text-white gradient" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
        <Hero />
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
        <section id="about-section" className="bg-white border-b py-8">
          <div className="container max-w-5xl mx-auto m-8">
            <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              About
            </h2>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-5/6 sm:w-1/2 p-6">
                <h3 className="text-3xl text-center text-gray-800 font-bold leading-none mb-3 ">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-lg mb-4 ">
                  Every year, four million animals face euthanasia in California alone. At 2 The Rescue Animal Sanctuary, our mission is to reduce this heartbreaking number. We are dedicated to offering a safe haven for animals destined for unnecessary euthanasia, providing them with the opportunity to thrive while we search for their forever homes.
                </p>
                <p className="text-gray-600 text-lg mb-8 ">
                  Our sanctuary is a place where animals find comfort, love, and the care they deserve. We ensure each animal enjoys a clean and safe environment, proper nutrition, and essential health services. Our primary goal is the well-being of every animal we rescue and to save as many lives as possible.
                </p>
              </div>
              <div className="w-full sm:w-1/2 p-6">
                <div className="mt-10 carousel carousel-vertical rounded-box w-full h-96">
                  <div className="carousel-item">
                    <img src="images/brittle.webp" alt="" className="h-full object-cover" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/charlie.webp" alt="" className="h-full object-cover" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/hammy.webp" alt="" className="h-full object-cover" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/peter.webp" alt="" className="h-full object-cover" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/quacky.webp" alt="" className="h-full object-cover" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/thor.webp" alt="" className="h-full object-cover" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/toby.webp" alt="" className="h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap flex-col-reverse sm:flex-row">
              <div className="w-full sm:w-1/2 p-6 mt-6">
                <div className="mt-16 carousel carousel-vertical rounded-box w-full h-101">
                  <div className="carousel-item">
                    <img src="images/hammy.webp" alt="" className="h-full object-cover" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/tucker.webp" alt="" className="h-full object-cover" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/viola.webp" alt="" className="h-full object-cover" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/gobbles.webp" alt="" className="h-full object-cover" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/tink.webp" alt="" className="h-full object-cover" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/faith.webp" alt="" className="h-full object-cover" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/victory.webp" alt="" className="h-full object-cover" />
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 p-6 mt-6">
                <div className="align-middle">
                  <h3 className="text-3xl text-gray-800 text-center font-bold leading-none m-3">
                    A Message From Our Founder
                  </h3>
                  <p className="text-gray-600 my-4">
                    My passion for animals has been a lifelong journey. Growing up in South Africa, I was constantly surrounded by a variety of animals. Our home was known for being a refuge, often filled with shoeboxes housing recovering creatures.
                  </p>
                  <p className="text-gray-600 mb-4">
                    It is beyond my comprehension how anyone can discard a pet or choose to euthanize an animal due to lack of space. Many rescues face difficult decisions due to limited resources, often resulting in the destruction of animals they cannot accommodate or rehome.
                  </p>
                  <p className="text-gray-600 mb-4">
                    At 2 The Rescue Animal Sanctuary, our mission is clear: to rescue, rehabilitate when needed, and rehome animals at risk of euthanasia due to overcrowded shelters or those sold at slaughter auctions. We are committed to never refusing or denying any animal a safe and loving environment until we can find them a permanent home.
                  </p>
                  <p className='text-gray-600 mb-4'>
                    Together, we can make a difference in the lives of countless animals.
                  </p>
                  <p className='text-gray-600 mb-4'>
                    Warm regards,
                  </p>
                  <p className='font-bold text-gray-600'>
                    Ilana Friedman
                  </p>
                  <p className='font-bold text-gray-600'>
                    Founder, 2 The Rescue Animal Sanctuary
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white border-b py-8">
          <div className="container mx-auto flex flex-wrap pt-4 pb-12">
            <h2 className="w-full my-2 text-6xl font-bold leading-tight text-center text-gray-800">
              Learn More!
            </h2>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink ">
              <div className="flex-1 bg-white rounded-t rounded overflow-hidden ">
                <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                  <h3 className="w-full font-bold text-center mt-2 mb-4 text-4xl text-gray-800 px-6">
                    Our Animals
                  </h3>
                </a>
                <img src='images/tink.webp' className='m-2 w-5/6 mx-auto rounded-lg'></img>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden  p-6">
                <div className="flex items-center justify-center">
                  <Link href='/Animals'>
                    <button href='/Animals' className="mx-auto lg:mx-0 hover:underline blue text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                      View All
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink ">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden ">
                <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                  <h3 className="w-full font-bold text-center mt-2 text-4xl text-gray-800 px-6">
                    Personality Quiz
                  </h3>
                  <div className="card gradient m-6">
                    <div className="card-body rounded-xl">
                      <p className="text-gray-800 text-center text-xl m-2">
                        Answer questions about yourself to find out which animal at the sanctuary is most like you!
                      </p>
                    </div>
                  </div>
                  {/* <p className="text-gray-800 text-center text-xl px-6 m-10">
                    Answer questions about yourself to find out which animal at the sanctuary is most like you!
                  </p> */}
                </a>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden  p-6">
                <div className="flex items-center justify-center">
                <Link href='/Quiz'>
                  <button className="mx-auto lg:mx-0 hover:underline blue text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Quiz Me!
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink ">
              <div className="flex-1 bg-white rounded-t rounded overflow-hidden ">
                <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                  <h3 className="w-full font-bold text-center mt-2 mb-4 text-4xl text-gray-800 px-6">
                    Volunteer
                  </h3>
                </a>
                <img src='images/tucker.webp' className='m-2 w-5/6 mx-auto rounded-lg'></img>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden  p-6">
                <div className="flex items-center justify-center">
                <Link href='/Volunteer'>
                  <button className="mx-auto lg:mx-0 hover:underline blue text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    More Info
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <DonateFooter />
        <Footer />
      </main>
    </>
  );
}
