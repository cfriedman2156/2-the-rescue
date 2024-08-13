import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_ANIMAL_BY_NAME } from '../../graphql/queries';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import React, { useState } from "react";
import Loading from '@/components/Loading';

export default function OtherDetail() {
    const router = useRouter();
    const { name } = router.query;

    const { loading, error, data } = useQuery(GET_ANIMAL_BY_NAME, {
        variables: { name },
        skip: !name,
    });

    const [activeIndex, setActiveIndex] = useState(0);

    if (loading) return <Loading />;
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
                <section className='pt-28 flex justify-center'>
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
                <Footer />
                <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
            </main>
        </>
    );
}
