import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="footer footer-center pb-5 pt-3 bg-gradient text-base-content rounded">
            <p className="text-lg mb-">Follow us on social media!</p>
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
            </aside>
        </footer>
    );
}