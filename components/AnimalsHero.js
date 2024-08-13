export default function Hero({ title, description, VideoComponent }) {
    return (
        <section className="pt-18">
            <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                <div className="flex flex-col w-full md:w-1/2 justify-center items-center text-center md:text-left">
                    <h1 className="my-4 text-7xl font-bold leading-tight">{title}</h1>
                    <p className="leading-normal text-2xl mb-8">{description}</p>
                </div>
                <div className="w-full pt-14 md:w-1/2 md:pl-16 sm:pb-10 text-center">
                    <VideoComponent />
                </div>
            </div>
        </section>
    );
}
