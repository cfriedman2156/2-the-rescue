import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className="w-full pb-2">
                <div className="h-1 mx-auto bg-white opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <section className="footer gradient text-white md:px-20 items-center p-4">
                <aside className="flex flex-col items-start">
                    <p><img src="images/2therescuelogo.png" alt="Logo" className="h-10 rounded-full inline" />Copyright © {new Date().getFullYear()} - All right reserved by 2 The Rescue Animal Sanctuary</p>
                    <Link href="/Admin">
                        <p className="mt-2">Admin Sign-in</p>
                    </Link>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a href='https://www.facebook.com/RescueAnimalSanctuary/' target='_blank' rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookSquare} className="fa-3xl" />
                    </a>
                    <a href="https://www.instagram.com/2therescueanimalsanctuary" target='_blank' rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="fa-3xl" />
                    </a>
                </nav>
            </section>
        </footer>
    );
}
