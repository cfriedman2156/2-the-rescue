import Nav from "@/components/Nav";
import DonateFooter from "@/components/DonateFooter";
import Footer from "@/components/Footer";



export default function Visit() {
    return (
        <>
            <Nav />
            <main className="leading-normal tracking-normal text-white gradient" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                <section className="pt-24">
                    <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-center">
                        <h1 className="my-4 text-6xl font-bold leading-tight">Before and After Stories</h1>
                    </div>
                    <div className="container max-w-5xl mx-auto m-8">

                        <div className="w-full mb-4">
                            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-5/6 sm:w-1/2 p-6">
                                <h3 className="text-4xl text-center  font-bold leading-none mb-3 ">
                                    Prince
                                </h3>
                                <p className=" text-lg mb-4 ">
                                    Prince, a young stallion, came to us in Ramona under unfortunate circumstances. After his owner passed away, the owner's son, fearful of Prince, neglected to feed him. We stepped in, offering $200 to take Prince under our care, and immediately began his rehabilitation.</p>
                                <p className=" text-lg mb-8 ">
                                    Our veterinarian performed a thorough examination, gelded him, and we followed the UC Davis refeeding protocol to restore his health. During his training, we discovered a minor spinal issue that renders him unsuitable for riding. </p>
                                <p className=" text-lg mb-4 ">
                                    Despite this, Prince thrives in our sanctuary. He shares a one-acre enclosure with his best friend Luke, where they mischievously play and run daily. Prince is truly living his best life.</p>
                            </div>
                            <div className="mt-10 ml-7 rounded-xl diff aspect-[9/12] ba-img">
                                <div className="diff-item-1">
                                    <img alt="Prince after" src="/images/princeafter.webp" />
                                </div>
                                <div className="diff-item-2">
                                    <img
                                        alt="Prince before"
                                        src="/images/princebefore.jpeg" />
                                </div>
                                <div className="diff-resizer"></div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="relative -mt-12 lg:-mt-24">
                        <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fillRule="nonzero">
                                    <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                                    <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
                                    <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
                                </g>
                                <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fillRule="nonzero">
                                    <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
                                </g>
                            </g>
                        </svg>
                    </div>

                </section>
                






                <DonateFooter />
                <Footer />
            </main>
        </>
    )
}