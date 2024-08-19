import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="gradient">
            <div className="w-full pb-2">
                <div className="h-1 mx-auto bg-white opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <section className="footer text-white px-4 md:px-20 py-4 flex flex-col md:flex-row items-center md:justify-between">
                <aside className="flex flex-col items-center md:items-start text-center md:text-left">
                    <p>
                        <img src="images/2therescuelogo.png" alt="Logo" className="h-10 rounded-full inline" />
                        Copyright © {new Date().getFullYear()} - All rights reserved by 2 The Rescue Animal Sanctuary
                    </p>
                    <Link href="/Admin">
                        <p className="mt-2">Admin Sign-in</p>
                    </Link>
                </aside>
                <nav className="flex  md:mt-0 space-x-4">
                    <a href='https://www.facebook.com/RescueAnimalSanctuary/' target='_blank' rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookSquare} className="fa-2xl" />
                    </a>
                    <a href="https://www.instagram.com/2therescueanimalsanctuary" target='_blank' rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="fa-2xl" />
                    </a>
                </nav>
            </section>
        </footer>
    );
}
