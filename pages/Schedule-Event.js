import Nav from "@/components/Nav";
import EmailTemplate from "@/components/email-template";
import Footer from "@/components/Footer";

export default function Contact() {
    return (
        <>
            <Nav />
            <main className="leading-normal tracking-normal text-white gradient" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                <section id="about-section" className="gradient text-white border-b py-24">
                    <div className="container max-w-5xl mx-auto m-8">
                        <h2 className="w-full my-2 text-5xl text-white font-bold leading-tight text-center text-gray-800">
                            Book an Event
                        </h2>
                        <div className="text-lg mx-10 md:mx-20">
                            We’re excited to help you plan a memorable event with us! Please fill out the form below and provide as many details as possible, including:
                            <li className="mx-10 md:mx-20 pt-2">Your contact information</li>
                            <li className="mx-10 md:mx-20">Desired event date</li>
                            <li className="mx-10 md:mx-20">Estimated number of attendees</li>
                            <li className="mx-10 md:mx-20 pb-2">Any special requests or event details</li>
                            Our team will review your submission and get back to you as soon as possible. Thank you for considering 2 The Rescue Animal Sanctuary for your special gathering!
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="mx-2 md:mx-60 flex flex-wrap bg-white rounded-2xl h-auto w-full justify-center text-center p-6">
                            <EmailTemplate />
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    );
}
