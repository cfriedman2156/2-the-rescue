import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_HORSE_BY_NAME } from '../../graphql/queries';
import Nav from '../../components/Nav';
import DonateFooter from '../../components/DonateFooter';
import Footer from '../../components/Footer';

export default function HorseDetail() {
  const router = useRouter();
  const { name } = router.query;

  const { loading, error, data } = useQuery(GET_HORSE_BY_NAME, {
    variables: { name },
    skip: !name,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const horse = data?.horseByName;

  return (
    <>
      <main className="leading-normal tracking-normal text-white gradient" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
        <Nav />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-4">{horse.name}</h1>
          <img src={horse.profileImage} alt={horse.name} className="w-full rounded-xl mb-4" />
          <p className="text-lg">{horse.description}</p>
          <p className="text-lg">Age: {horse.age}</p>
          <p className="text-lg">Available for Adoption: {horse.adoption ? 'Yes' : 'No'}</p>
          <div className="mt-4">
            {horse.photos && horse.photos.length > 0 && (
              <>
                <h2 className="text-2xl font-bold mb-2">Photos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {horse.photos.map((photo, index) => (
                    <img key={index} src={photo} alt={`${horse.name} photo ${index + 1}`} className="w-full rounded-xl" />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        <DonateFooter />
        <Footer />
      </main>
    </>
  );
}
