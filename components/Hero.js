import HomeVideo from "./HomeVideo";

export default function Hero() {
    return (
        <section className="pt-24">
            <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left">
                    <h1 className="my-4 text-5xl font-bold leading-tight">Over 4 million animals are put down in California every year.</h1>

                    <h1 className="my-4 text-5xl font-bold leading-tight">Our goal is to change that.</h1>
                    <p className="leading-normal text-2xl mb-8 ">At 2 The Rescue Animal Sanctuary, we save, rehabilitate, and re-home animals at risk of euthanasia or slaughter. Our mission is to provide every animal with a safe, loving environment until they find a forever home.</p>
                    <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        Donate
                    </button>
                </div>
                <div className="w-full md:w-1/2  text-center">
                    <HomeVideo />
                </div>
            </div>
        </section>
    );
}
