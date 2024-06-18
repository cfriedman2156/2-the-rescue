import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '@/components/Footer';
import AddAnimal from '@/components/AddAnimal';
import DeleteAnimalModal from '@/components/DeleteAnimalModal';
//import AddPhotos from '@/components/AddPhotos';

export default function Admin() {
  

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
        <section className="hero h-64 flex flex-col justify-end">
          <div className="text-center">
            <div className="max-w-md">
              <h1 className="text-5xl mt-10 font-bold">Admin Page</h1>
              <p className="text-lg py-6">Make changes to the site</p>
            </div>
          </div>
        </section>
        <div className="flex flex-wrap justify-evenly h-96 pt-10">
          <AddAnimal />
          <button className='btn w-80 text-2xl h-40 focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>
            Edit Animal
          </button>
          <DeleteAnimalModal />
          {/* <AddPhotos /> */}
        </div>
        <Footer />
      </main>
    </>
  );
}
