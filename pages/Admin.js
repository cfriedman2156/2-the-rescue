import Nav from '../components/Nav';
import Footer from '@/components/Footer';
import AddAnimal from '@/components/AddAnimal';
import DeleteAnimalModal from '@/components/DeleteAnimalModal';
import EditAnimalModal from '@/components/EditAnimal';

export default function Admin() {


  return (
    <>
      <Nav />
      <main className="leading-normal tracking-normal text-white gradient" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
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

          <DeleteAnimalModal />
          <EditAnimalModal />
        </div>
        <div className='bg-white rounded-xl m-10 flex w-full justify-center w-96'>
          
        </div>
        <Footer />
      </main>
    </>
  );
}
