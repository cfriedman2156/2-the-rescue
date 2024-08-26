import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Success() {
    return (
        <>
            <Nav />
            <main className="gradient text-white">
                <section className="pt-24 pb-14 sm:pt-32">
                    <div className="container px-4 mx-auto flex flex-wrap flex-col items-center">
                        <div className="w-full flex flex-wrap justify-center mb-8">
                            <img src="./images/sally.webp" className="h-48 sm:h-80 rounded-xl" />
                            <img src="./images/tucker.webp" className="h-48 sm:h-80 rounded-xl" />
                        </div>
                        <div className="w-full text-center px-4 sm:px-6">
                            <h1 className="my-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">Thank you for your donation!</h1>
                            <p className="text-xl sm:text-2xl">A receipt has been sent to your email</p>
                            <h3 className="my-4 text-lg sm:text-xl leading-tight text-white">
                                Your generous donations directly support the animals in our care. Every dollar contributes to providing food, shelter, and medical treatment, ensuring our animals remain healthy and comfortable.
                            </h3>
                            <h3 className="my-4 text-lg sm:text-xl leading-tight text-white">
                                Your support helps us continue our mission to rescue, rehabilitate, and rehome animals in need. Together, we can make a life-saving difference.
                            </h3>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    );
}
