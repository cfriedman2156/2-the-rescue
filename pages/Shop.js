import Nav from "@/components/Nav";
import DonateFooter from "@/components/DonateFooter";
import Footer from "@/components/Footer";



export default function Shop() {
    return (
        <>
            <Nav />
            <main className="leading-normal  tracking-normal text-white gradient" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                <section className="pt-24 h-screen">
                    <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">                        
                        <div className="w-full text-center h-96">
                            <h1 className="my-28 text-5xl font-bold leading-tight">Shop Coming Soon!</h1>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}