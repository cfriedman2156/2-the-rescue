import { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import Footer from '@/components/Footer';
import AddAnimal from '@/components/AddAnimal';
import DeleteAnimalModal from '@/components/DeleteAnimalModal';
import EditAnimalModal from '@/components/EditAnimal';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === process.env.NEXT_PUBLIC_ADMIN_USERNAME && password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setShowModal(false);
      setError('');
    } else {
      setError('Incorrect username or password');
    }
  };

  useEffect(() => {
    // Ensures the modal shows up when the page is visited
    setShowModal(true);
  }, []);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-bold mb-4">Admin Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-300 p-2 mb-4 w-full rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 p-2 mb-4 w-full rounded"
            />
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              onClick={handleLogin}
              className="bg-blue-500 text-white p-2 rounded w-full"
            >
              Login
            </button>
          </div>
        </div>
      )}
      {isAuthenticated && (
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
            <div className="flex flex-wrap justify-evenly  pt-10">
              <AddAnimal />
              <DeleteAnimalModal />              
            </div>
            
            <div className="flex flex-wrap justify-evenly mt-16  ">
             
              <EditAnimalModal />
            </div>
            <div className="bg-white rounded-xl m-10 flex w-full justify-center w-96"></div>
            <Footer />
          </main>
        </>
      )}
    </>
  );
}










// import Nav from '../components/Nav';
// import Footer from '@/components/Footer';
// import AddAnimal from '@/components/AddAnimal';
// import DeleteAnimalModal from '@/components/DeleteAnimalModal';
// import EditAnimalModal from '@/components/EditAnimal';

// export default function Admin() {


//   return (
//     <>
//       <Nav />
//       <main className="leading-normal tracking-normal text-white gradient" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
//         <section className="hero h-64 flex flex-col justify-end">
//           <div className="text-center">
//             <div className="max-w-md">
//               <h1 className="text-5xl mt-10 font-bold">Admin Page</h1>
//               <p className="text-lg py-6">Make changes to the site</p>
//             </div>
//           </div>
//         </section>
//         <div className="flex flex-wrap justify-evenly h-96 pt-10">
//           <AddAnimal />

//           <DeleteAnimalModal />
//           <EditAnimalModal />
//         </div>
//         <div className='bg-white rounded-xl m-10 flex w-full justify-center w-96'>
          
//         </div>
//         <Footer />
//       </main>
//     </>
//   );
// }
