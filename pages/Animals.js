import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/Nav';
import AnimalsHero from '../components/AnimalsHero';
import AnimalsVideo from '@/components/AnimalsVideo';
import DonateFooter from '@/components/DonateFooter';
import Footer from '@/components/Footer';

export default function Animals() {
    return (
        <>
            <Head>
                <title>2 The Rescue</title>
                <meta name="description" content="Simple landing page" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />
                <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" />
                <style>{`
            .gradient {
              background: linear-gradient(90deg, #E88562 0%, #f5c6b6 100%);
            }
            .gradient1 {
              background: linear-gradient(90deg, #f5c6b6 0%, #FFFFFF 100%);
            }
          `}</style>
            </Head>
            <main className="leading-normal tracking-normal text-white gradient" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                <Nav />
                <AnimalsHero
                    title="Our Animals"
                    description="We rescue many types of animals from horses to ducks and everything in between! They come from a variety of places including auctions, owner relinquishments, and animal control."
                    VideoComponent={AnimalsVideo}
                />
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
                <section className="bg-white border-b py-8">
                    <div className="container max-w-5xl mx-auto">
                        <h2 className="w-full my-2 text-6xl font-bold leading-tight text-center text-gray-800">
                            View Our Animals
                        </h2>
                        <div className="w-full mb-4">
                            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-5/6 sm:w-1/2 p-6">
                                <h3 className="text-5xl text-center text-gray-800 font-bold leading-none mb-3 ">
                                    Horses
                                </h3>
                                <Link href="/Horses">
                                    <button className=' focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>
                                        <img src='images/tucker.webp' className='rounded-xl mt-6'></img>
                                    </button>
                                </Link>
                            </div>
                            <div className="w-full sm:w-1/2 p-6">
                                <h3 className="text-5xl text-center text-gray-800 font-bold leading-none mb-3 ">
                                    Donkeys and Mules
                                </h3>
                                <Link href="/Donkeys">
                                    <button className=' focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>
                                        <img src='images/faith.webp' className='rounded-xl mt-6'></img>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-5/6 sm:w-1/2 p-6">
                                <h3 className="text-5xl text-center text-gray-800 font-bold leading-none mb-3 ">
                                    Birds
                                </h3>
                                <Link href="/Birds">
                                    <button className=' focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>
                                        <img src='images/quacky.webp' className='rounded-xl mt-6'></img>
                                    </button>
                                </Link>
                            </div>
                            <div className="w-full sm:w-1/2 p-6">
                                <h3 className="text-5xl text-center text-gray-800 font-bold leading-none mb-3 ">
                                    Sheep and Goats
                                </h3>
                                <Link href="/Sheep">
                                    <button className=' focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>
                                        <img src='images/brittle.webp' className='rounded-xl mt-6'></img>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-5/6 sm:w-1/2 p-6">
                                <h3 className="text-5xl text-center text-gray-800 font-bold leading-none mb-3 ">
                                    Pigs
                                </h3>
                                <Link href="/Pigs">
                                    <button className=' focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>
                                        <img src='images/hammy.webp' className='rounded-xl mt-6'></img>
                                    </button>
                                </Link>
                            </div>
                            <div className="w-full sm:w-1/2 p-6">
                                <h3 className="text-5xl text-center text-gray-800 font-bold leading-none mb-3 ">
                                    Other Friends
                                </h3>
                                <Link href="/Other-Friends">
                                    <button className=' focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>
                                        <img src='images/toby.webp' className='rounded-xl mt-6'></img>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <DonateFooter />
                <Footer />
            </main>
        </>
    )
}
