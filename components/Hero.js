import HomeVideo from "./HomeVideo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';


export default function Hero() {
    return (
        <section className="pt-24">
            <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                <div className="mb-36 pb-8 flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left">
                    <h1 className="my-4 text-5xl font-bold leading-tight">Over 4 million animals are put down in California every year.</h1>
                    <h1 className="my-4 text-5xl font-bold leading-tight">Our goal is to change that.</h1>
                    <p className="leading-normal text-2xl mb-4 ">2 The Rescue Animal Sanctuary is a 501(c)(3) nonprofit, where we save, rehabilitate, and re-home animals at risk of euthanasia or slaughter. Our mission is to provide every animal with a safe, loving environment until they find a forever home.</p>
                    <button
                        className="lg:mx-auto hover:underline blue md:bg-white text-white text-xl md:text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow focus:outline-none focus:shadow-outline transition-transform duration-300 ease-in-out transform hover:scale-105"
                    >
                        <a href="/Donate">Make a Donation</a>
                    </button>
                </div>
                <div className="w-full md:pt-14 md:w-1/2 md:pl-16 sm:pb-10 text-center">
                    <HomeVideo />
                    <div className="pt-3">
                        <a href='https://www.facebook.com/RescueAnimalSanctuary/' target='_blank' rel="noopener noreferrer" className="m-3">
                            <FontAwesomeIcon icon={faFacebookSquare} className="fa-4xl" />
                        </a>
                        <a href="https://www.instagram.com/2therescueanimalsanctuary" target='_blank' rel="noopener noreferrer" className="m-3">
                            <FontAwesomeIcon icon={faInstagram} className="fa-4xl" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
