import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_ANIMAL_BY_NAME } from '../../graphql/queries';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import React, { useState } from "react";
import Loading from '@/components/Loading';

export default function SheepDetail() {
    const router = useRouter();
    const { name } = router.query;

    const { loading, error, data } = useQuery(GET_ANIMAL_BY_NAME, {
        variables: { name },
        skip: !name,
    });

    const [activeIndex, setActiveIndex] = useState(0);

    if (loading) return <Loading/>;
    if (error) return <p>Error: {error.message}</p>;

    const animal = data?.animalByName;
    const slides = animal?.photos || [];

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <>
            <Nav />
            <main className="leading-normal tracking-normal text-white gradient" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>             
                <section className='pt-24 flex justify-center'>
                <div id="default-carousel" className="relative px-10 w-1/2 " data-carousel="slide">
                        <div className="relative h-56 overflow-hidden rounded-xl h-animal-image">
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`${activeIndex === index ? "block" : "hidden"} duration-700 ease-in-out absolute w-full h-full`}
                                    data-carousel-item
                                >
                                    <img
                                        src={slide}
                                        className="absolute block h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-xl"
                                        alt={`Slide ${index + 1}`}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="absolute dots z-30 flex -translate-x-1/2 left-1/2 space-x-3 rtl:space-x-reverse">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-blue-600" : "bg-white"}`}
                                    aria-current={activeIndex === index}
                                    aria-label={`Slide ${index + 1}`}
                                    onClick={() => setActiveIndex(index)}
                                    data-carousel-slide-to={index}
                                />
                            ))}
                        </div>
                        <button
                            type="button"
                            className="absolute back-button z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none"
                            onClick={prevSlide}
                            data-carousel-prev
                        >
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg
                                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 1 1 5l4 4"
                                    />
                                </svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button
                            type="button"
                            className="absolute forward-button z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            onClick={nextSlide}
                            data-carousel-next
                        >
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg
                                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 9 4-4-4-4"
                                    />
                                </svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                </section>

                <div className="container mx-auto px-4">
                    <div className='flex mt-12 flex-wrap'>
                        <div className='px-6 '>
                            <h1 className="text-6xl font-bold text-center">{animal.name}</h1>
                            <div className='py-5 px-40 text-2xl'>
                                <p className='my-2 font-bold'>Age: {animal.age}</p>
                                <p className='font-bold'>{animal.adoption ? 'Available for Adoption' : 'Sanctuary Animal'}</p>
                                <p className='mt-6 mb-6'>{animal.description}</p>
                            </div>
                            
                        </div>

                    </div>
                    <div className='flex justify-center text-2xl mb-10'>
                                <button href="/Donate" className="mx-auto lg:mx-0 hover:underline bg-white font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                    <a href="/Donate" className='text-black'>Sponsor {animal.name}</a>
                                </button>
                                
                            </div>

                </div>
                {/* <section className="relative -mt-12 lg:-mt-24">
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
                </section> */}
                {/* <div className="pt-4 bg-white">
                    {horse.photos && horse.photos.length > 0 && (
                        <>
                            <h2 className="text-4xl text-black text-center font-bold mb-2">Photos</h2>
                            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                                {horse.photos.map((photo, index) => (
                                    <img key={index} src={photo} alt={`${horse.name} photo ${index + 1}`} className="w-full rounded-xl" />
                                ))}
                            </div>
                        </>
                    )}
                </div> */}
                <Footer />
                <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
            </main>
        </>
    );
}
