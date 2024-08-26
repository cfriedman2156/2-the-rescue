import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Nav() {
    const router = useRouter();
    const [navOpen, setNavOpen] = useState(false);

    const goToAbout = (e) => {
        e.preventDefault();
        const offset = -40;
        const scrollToSection = () => {
            const aboutSection = document.getElementById('about-section');
            const topPos = aboutSection.getBoundingClientRect().top + window.scrollY + offset;
            window.scrollTo({ top: topPos, behavior: 'smooth' });
        };
        const findSection = () => {
            const aboutSection = document.getElementById('about-section');
            const topPos = aboutSection.getBoundingClientRect().top + window.scrollY + offset;
            window.scrollTo({ top: topPos });
        };

        if (router.pathname === '/') {
            scrollToSection();
        } else {
            router.push('/').then(() => {
                findSection();
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollpos = window.scrollY;
            const header = document.getElementById('header');
            const navAction = document.getElementById('navAction');
            const navContent = document.getElementById('nav-content');
            const toToggle = document.querySelectorAll('.toggleColour');

            if (scrollpos > 10) {
                header.classList.add('bg-white');
                navAction.classList.remove('md:bg-white');
                navAction.classList.add('md:blue');
                navAction.classList.remove('md:text-gray-800');
                navAction.classList.add('md:text-white');

                toToggle.forEach(element => {
                    element.classList.add('text-gray-800');
                    element.classList.remove('text-white');
                });

                header.classList.add('shadow');
                navContent.classList.remove('bg-gray-100');
                navContent.classList.add('bg-white');
            } else {
                header.classList.remove('bg-white');
                navAction.classList.remove('md:blue');
                navAction.classList.add('md:bg-white');
                navAction.classList.remove('md:text-white');
                navAction.classList.add('md:text-gray-800');

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
    };

    const redirectToAnimals = () => {
        router.push('/Animals');
    };

    const redirectToDifference = () => {
        router.push('/Make-a-Difference')
    }

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <nav id="header" className="fixed w-full z-40 top-0 text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-1">
                <div className="pl-4 flex items-center">
                    <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">
                        <img src="images/2therescuelogo.png" alt="Logo" className="h-20 rounded-full inline" />
                    </a>
                </div>
                <div className="block lg:hidden pr-4">
                    <button id="nav-toggle" onClick={toggleNav} className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className={`w-full rounded-2xl mx-4 flex-grow lg:flex lg:items-center lg:w-auto ${navOpen ? '' : 'hidden'} mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20`} id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                        <li className="mr-3 ">
                            <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="/">Home</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#" onClick={goToAbout}>About</a>
                        </li>
                        <li className="mr-3">
                             <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="/Quiz">Personality Quiz</a>
                        </li>
                        <li className="mr-3">
                            <div className="dropdown dropdown-hover">
                                <div role="button" className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" onClick={redirectToAnimals} onMouseOver={handleDropdownClick}>
                                    Animals
                                </div>
                                <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a href="/Before-and-After">Before and After</a></li>
                                    <li><a href="/Horses">Horses</a></li>
                                    <li><a href="/Donkeys">Donkeys and Mules</a></li>
                                    <li><a href="/Birds">Birds</a></li>
                                    <li><a href="/Sheep-and-Goats">Sheep and Goats</a></li>
                                    <li><a href="/Pigs">Pigs</a></li>
                                    <li><a href="/Other-Friends">Other Friends</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mr-3">
                            <div className="dropdown dropdown-hover">
                                <div role="button" className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" onClick={redirectToDifference} onMouseOver={handleDropdownClick}>
                                    Make a Difference
                                </div>
                                <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a href="/Donate">Donate</a></li>
                                    <li><a href="/Sponsor">Sponsor an Animal</a></li>
                                    <li><a href="/Visit">Visit</a></li>
                                    <li><a href="/Volunteer">Volunteer</a></li>
                                    <li><a href="/Adopt">Adopt</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="/Shop">Shop</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="/Contact">Contact</a>
                        </li>
                    </ul>
                    <button id="navAction" href="/Donate" className="mx-auto lg:mx-0 hover:underline blue md:bg-white text-white md:text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        <a href="/Donate">Donate</a>
                    </button>
                </div>
            </div>
            <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
        </nav>
    );
}









// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// export default function Nav() {
//     const router = useRouter();
//     const [navOpen, setNavOpen] = useState(false);

//     const goToAbout = (e) => {
//         e.preventDefault();
//         const offset = -40;
//         const scrollToSection = () => {
//             const aboutSection = document.getElementById('about-section');
//             const topPos = aboutSection.getBoundingClientRect().top + window.scrollY + offset;
//             window.scrollTo({ top: topPos, behavior: 'smooth' });
//         };
//         const findSection = () => {
//             const aboutSection = document.getElementById('about-section');
//             const topPos = aboutSection.getBoundingClientRect().top + window.scrollY + offset;
//             window.scrollTo({ top: topPos });
//         };

//         if (router.pathname === '/') {
//             scrollToSection();
//         } else {
//             router.push('/').then(() => {
//                 findSection();
//             });
//         }
//     };

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollpos = window.scrollY;
//             const header = document.getElementById('header');
//             const navAction = document.getElementById('navAction');
//             const navContent = document.getElementById('nav-content');
//             const toToggle = document.querySelectorAll('.toggleColour');

//             if (scrollpos > 10) {
//                 header.classList.add('bg-white');
//                 navAction.classList.remove('bg-white');
//                 navAction.classList.add('blue');
//                 navAction.classList.remove('text-gray-800');
//                 navAction.classList.add('text-white');

//                 toToggle.forEach(element => {
//                     element.classList.add('text-gray-800');
//                     element.classList.remove('text-white');
//                 });

//                 header.classList.add('shadow');
//                 navContent.classList.remove('bg-gray-100');
//                 navContent.classList.add('bg-white');
//             } else {
//                 header.classList.remove('bg-white');
//                 navAction.classList.remove('blue');
//                 navAction.classList.add('bg-white');
//                 navAction.classList.remove('text-white');
//                 navAction.classList.add('text-gray-800');

//                 toToggle.forEach(element => {
//                     element.classList.add('text-white');
//                     element.classList.remove('text-gray-800');
//                 });

//                 header.classList.remove('shadow');
//                 navContent.classList.remove('bg-white');
//                 navContent.classList.add('bg-gray-100');
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     const handleDropdownClick = (e) => {
//         e.preventDefault();
//     };

//     const redirectToAnimals = () => {
//         router.push('/Animals');
//     };

//     const redirectToDifference = () => {
//         router.push('/Make-a-Difference')
//     }

//     const toggleNav = () => {
//         setNavOpen(!navOpen);
//     };

//     return (
//         <nav id="header" className="fixed w-full z-40 top-0 text-white">
//             <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-1">
//                 <div className="pl-4 flex items-center">
//                     <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">
//                         <img src="images/2therescuelogo.png" alt="Logo" className="h-20 rounded-full inline" />
//                     </a>
//                 </div>
//                 <div className="block lg:hidden pr-4">
//                     <button id="nav-toggle" onClick={toggleNav} className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
//                         <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                             <title>Menu</title>
//                             <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//                         </svg>
//                     </button>
//                 </div>
//                 <div className={`w-full rounded-2xl mx-4 flex-grow lg:flex lg:items-center lg:w-auto ${navOpen ? '' : 'hidden'} mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20`} id="nav-content">
//                     <ul className="list-reset lg:flex justify-end flex-1 items-center">
//                         <li className="mr-3 ">
//                             <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="/">Home</a>
//                         </li>
//                         <li className="mr-3">
//                             <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#" onClick={goToAbout}>About</a>
//                         </li>
//                         <li className="mr-3">
//                              <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="/Quiz">Personality Quiz</a>
//                         </li>
//                         <li className="mr-3">
//                             <div className="dropdown dropdown-hover">
//                                 <div role="button" className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" onClick={redirectToAnimals} onMouseOver={handleDropdownClick}>
//                                     Animals
//                                 </div>
//                                 <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                                     <li><a href="/Before-and-After">Before and After</a></li>
//                                     <li><a href="/Horses">Horses</a></li>
//                                     <li><a href="/Donkeys">Donkeys and Mules</a></li>
//                                     <li><a href="/Birds">Birds</a></li>
//                                     <li><a href="/Sheep-and-Goats">Sheep and Goats</a></li>
//                                     <li><a href="/Pigs">Pigs</a></li>
//                                     <li><a href="/Other-Friends">Other Friends</a></li>
//                                 </ul>
//                             </div>
//                         </li>
//                         <li className="mr-3">
//                             <div className="dropdown dropdown-hover">
//                                 <div role="button" className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" onClick={redirectToDifference} onMouseOver={handleDropdownClick}>
//                                     Make a Difference
//                                 </div>
//                                 <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                                     <li><a href="/Donate">Donate</a></li>
//                                     <li><a href="/Sponsor">Sponsor an Animal</a></li>
//                                     <li><a href="/Visit">Visit</a></li>
//                                     <li><a href="/Volunteer">Volunteer</a></li>
//                                     <li><a href="/Adopt">Adopt</a></li>
//                                 </ul>
//                             </div>
//                         </li>
//                         <li className="mr-3">
//                             <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="/Shop">Shop</a>
//                         </li>
//                         <li className="mr-3">
//                             <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="/Contact">Contact</a>
//                         </li>
//                     </ul>
//                     <button id="navAction" href="/Donate" className="mx-auto lg:mx-0 hover:underline bg-white font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
//                         <a href="/Donate">Donate</a>
//                     </button>
//                 </div>
//             </div>
//             <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
//         </nav>
//     );
// }


