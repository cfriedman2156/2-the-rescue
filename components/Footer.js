import { useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'princess') {
            // Save authentication state (if needed)
            localStorage.setItem('auth', 'true');
            router.push('/Admin');
        } else {
            alert('Incorrect username or password');
        }
    };

    return (
        <footer className="footer footer-center bg-white pb-2 pt-2 text-base-content rounded">
            <p className="text-lg">Follow us on social media!</p>
            <nav className="" style={{ marginBottom: '-2rem', marginTop: '-2rem' }}>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://www.facebook.com/RescueAnimalSanctuary/' target='_blank' rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookSquare} className="fa-3xl" />
                    </a>
                    <a href="https://www.instagram.com/2therescueanimalsanctuary" target='_blank' rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="fa-3xl" />
                    </a>
                </div>
            </nav>
            <aside>
                <p>Copyright © 2024 - All right reserved by 2 The Rescue Animal Sanctuary Inc.</p>
                <button className="" onClick={() => document.getElementById('my_modal_2').showModal()}>Admin Sign In</button>
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Admin Sign In</h3>
                        <form onSubmit={handleSubmit}>
                            <label className="input m-6 input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input 
                                    type="text" 
                                    className="grow" 
                                    placeholder="Username" 
                                    value={username} 
                                    onChange={(e) => setUsername(e.target.value)} 
                                />
                            </label>
                            <label className="input m-6 input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input 
                                    type="password" 
                                    className="grow" 
                                    placeholder="Password" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                />
                            </label>
                            <button className='btn btn-primary' type="submit">Submit</button>
                        </form>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </aside>
        </footer>
    );
}
