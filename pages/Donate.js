import Head from 'next/head';
import Nav from '../components/Nav';

export default function Donate() {
    return (
        <>
            <Head>
                <title>2 The Rescue</title>
                <meta name="description" content="Simple landing page" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />
                <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" />
                <style>{`
            .gradient {
              background: linear-gradient(90deg, #E88562 0%, #f5c6b6 100%);
            }
            .gradient1 {
              background: linear-gradient(90deg, #f5c6b6 0%, #FFFFFF 100%);
            }
          `}</style>
            </Head>
            <main className="leading-normal tracking-normal text-white gradient" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                <Nav />
                <div>Donate!</div>
            </main>
        </>
    )
}