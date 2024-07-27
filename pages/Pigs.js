import Link from 'next/link';
import Nav from '../components/Nav';
import { useQuery } from '@apollo/client';
import { GET_PIGS } from '../graphql/queries';
import DonateFooter from '@/components/DonateFooter';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';

function Donkeys() {
  const { loading, error, data } = useQuery(GET_PIGS);

  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  // Ensure data and data.animalsType are defined
  const animals = data?.animalsType || [];

  return (
    <>
      <Nav />
      <main className="leading-normal tracking-normal text-white gradient" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
        <section className="pt-24">
          <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full md:w-1/2 justify-center items-center text-center md:text-left">
              <h1 className="my-4 text-7xl font-bold leading-tight">Pigs</h1>
              <p className="leading-normal text-2xl mb-8">
                Our horses come from various backgrounds, including rescues from neglect, abuse, and retirement from demanding careers. We provide a balanced diet tailored to their individual needs, ensuring they receive high-quality hay, grains, and essential supplements. Regular veterinary check-ups, dental care, and hoof maintenance are integral to their health. Our team of caretakers and volunteers ensures each horse gets the medical attention and daily care they need. Your support helps us continue offering a safe haven for these magnificent animals.
              </p>
            </div>
            <div className="w-full md:w-1/2 text-center p-10 rounded-xl">
              <img className="rounded-xl" src="/images/harley.webp" alt="Toby" />
            </div>
          </div>
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
        <section className="bg-white border-b py-8">
          <div className="container max-w-5xl mx-auto">
            <h2 className="w-full my-2 text-6xl font-bold leading-tight text-center text-gray-800">
              Our Pigs
            </h2>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>

            {animals.map((animal) => (
              <div key={animal.id} className="flex flex-wrap flex-col-reverse sm:flex-row">
                <div className="w-full sm:w-1/2">
                  <Link href={`/Pigs/${animal.name}`}>
                    <button className='focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>
                      <img src={animal.profileImage} className='rounded-xl mt-6' alt={animal.name}></img>
                    </button>
                  </Link>
                </div>
                <div className="w-full sm:w-1/2 p-6 mt-6">
                  <div className="align-middle">
                    <h3 className="text-4xl text-gray-800 text-center font-bold leading-none m-3">
                      {animal.name}
                    </h3>
                    <p className="text-gray-600 my-4">
                      {animal.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <DonateFooter />
        <Footer />
      </main>
    </>
  );
}

export default Donkeys;
