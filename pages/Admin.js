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
    setShowModal(true);
  }, []);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl bg-white p-8 text-slate-800 shadow-2xl">
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">2 The Rescue</p>
              <h2 className="text-3xl font-bold">Admin Login</h2>
              <p className="mt-2 text-sm text-slate-500">Sign in to manage sanctuary animals.</p>
            </div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input input-bordered mb-4 w-full bg-slate-50"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered mb-4 w-full bg-slate-50"
            />
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              onClick={handleLogin}
              className="btn w-full border-none bg-teal-600 text-white hover:bg-teal-700"
            >
              Login
            </button>
          </div>
        </div>
      )}
      {isAuthenticated && (
        <>
          <Nav />
          <main className="min-h-screen bg-slate-100 leading-normal tracking-normal text-slate-800" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
            <section className="gradient px-6 pb-20 pt-24 text-white">
              <div className="mx-auto max-w-6xl">
                <div className="max-w-3xl">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-white/80">Sanctuary dashboard</p>
                  <h1 className="text-4xl font-bold md:text-6xl">Admin Center</h1>
                  <p className="mt-4 max-w-2xl text-lg text-white/90">Add new residents, update animal profiles, and keep adoption information current.</p>
                </div>
              </div>
            </section>
            <div className="mx-auto -mt-12 max-w-6xl px-6 pb-20">
              <div className="grid gap-6 lg:grid-cols-2">
                <AddAnimal />
                <DeleteAnimalModal />
              </div>
              <div className="mt-8">
                <EditAnimalModal />
              </div>
            </div>
            <Footer />
          </main>
        </>
      )}
    </>
  );
}