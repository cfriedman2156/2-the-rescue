import Nav from "@/components/Nav";
import EmailTemplate from "@/components/email-template";
import DonateFooter from "@/components/DonateFooter";
import Footer from "@/components/Footer";

export default function Contact() {
    return (
        <>
            <Nav />
            <main className="leading-normal tracking-normal text-white gradient" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                <section id="about-section" className="gradient text-white border-b py-24">
                    <div className="container max-w-5xl mx-auto m-8">
                        <h2 className="w-full my-2 text-5xl text-white font-bold leading-tight text-center text-gray-800">
                            Contact
                        </h2>
                    </div>
                    <div className="flex justify-center">
                        <div className="mx-2 md:mx-60 flex flex-wrap bg-white rounded-2xl h-auto w-full justify-center text-center p-6">
                            <EmailTemplate />
                        </div>
                    </div>
                </section>
                {/* <DonateFooter /> */}
                <Footer />
            </main>
        </>
    );
}
