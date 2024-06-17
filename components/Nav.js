import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Nav() {
    const router = useRouter();

    const goToAbout = (e) => {
        e.preventDefault();
        const offset = -40; // Adjust this value based on your navbar height
        const scrollToSection = () => {
            const aboutSection = document.getElementById('about-section');
            const topPos = aboutSection.getBoundingClientRect().top + window.scrollY + offset;
            window.scrollTo({ top: topPos, behavior: 'smooth' });
        };
        const findSection = () => {
            const aboutSection = document.getElementById('about-section');
            const topPos = aboutSection.getBoundingClientRect().top + window.scrollY + offset;
            window.scrollTo({ top: topPos });
        }

        if (router.pathname === '/') {
            scrollToSection();
        } else {
            router.push('/').then(() => {
                findSection();
            });
        }
    };

    useEffect(() => {
        const navToggle = document.getElementById('nav-toggle');
        const navContent = document.getElementById('nav-content');
        const header = document.getElementById('header');
        const navAction = document.getElementById('navAction');
        const toToggle = document.querySelectorAll('.toggleColour');

        if (navToggle) {
            navToggle.addEventListener('click', () => {
                navContent.classList.toggle('hidden');
            });
        }

        const handleScroll = () => {
            const scrollpos = window.scrollY;

            if (scrollpos > 10) {
                header.classList.add('bg-white');
                navAction.classList.remove('bg-white');
                navAction.classList.add('blue');
                navAction.classList.remove('text-gray-800');
                navAction.classList.add('text-white');

                toToggle.forEach(element => {
                    element.classList.add('text-gray-800');
                    element.classList.remove('text-white');
                });

                header.classList.add('shadow');
                navContent.classList.remove('bg-gray-100');
                navContent.classList.add('bg-white');
            } else {
                header.classList.remove('bg-white');
                navAction.classList.remove('blue');
                navAction.classList.add('bg-white');
                navAction.classList.remove('text-white');
                navAction.classList.add('text-gray-800');

                toToggle.forEach(element => {
                    element.classList.add('text-white');
                    element.classList.remove('text-gray-800');
                });

                header.classList.remove('shadow');
                navContent.classList.remove('bg-white');
                navContent.classList.add('bg-gray-100');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleDropdownClick = (e) => {
        e.preventDefault();
        // Add your dropdown toggle logic here if needed
    };

    return (
        <nav id="header" className="fixed w-full z-30 top-0 text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-1">
                <div className="pl-4 flex items-center">
                    <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">
                        <img src="images/logo1.jpeg" alt="Logo" className="h-20 rounded-full inline" />
                    </a>
                </div>

                <div className="block lg:hidden pr-4">
                    <button id="nav-toggle" className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                        <li className="mr-3">
                            <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="/">Home</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#" onClick={goToAbout}>About</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="/Quiz">Personality Quiz</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="/Animals">Animals</a>
                        </li>
                        <div className="dropdown dropdown-end">
                            <li className="mr-3">
                                <a role="button" className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#" onClick={handleDropdownClick}>
                                    Make a Difference
                                </a>
                                <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                    <li><a href="/Donate">Donate</a></li>
                                    <li><a href="#">Sponsor an Animal</a></li>
                                    <li><a href="#">Give Monthly</a></li>
                                    <li><a href="#">Volunteer</a></li>
                                    <li><a href="#">Adopt</a></li>
                                </ul>
                            </li>
                        </div>
                        <li className="mr-3">
                            <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="/Shop">Shop</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">Contact</a>
                        </li>
                    </ul>
                    <button id="navAction" href="/Donate" className="mx-auto lg:mx-0 hover:underline bg-white font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        <a href="/Donate">Donate</a>
                    </button>
                </div>
            </div>
            <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
        </nav>
    );
}
