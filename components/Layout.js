import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Tailwind Starter Template - Landing Page Template: Tailwind Toolbox</title>
        <meta name="description" content="Simple landing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" />
        <style>{`
          .gradient {
            background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
          }
        `}</style>
      </Head>
      <div className="leading-normal tracking-normal text-white gradient" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
        <Nav />
        {children}
        <Footer />
      </div>
    </>
  );
}
