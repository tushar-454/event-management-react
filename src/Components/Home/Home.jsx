import { useLoaderData } from 'react-router-dom';
import Banner from './Banner/Banner';
import ClientHappiness from './ClientHappiness/ClientHappiness';
import Pricing from './Pricing/Pricing';
import Services from './Services/Services';

const Home = () => {
  const servicesApi = useLoaderData();
  return (
    <>
      <Banner />
      <Services servicesApi={servicesApi} />
      <Pricing />
      <ClientHappiness />
    </>
  );
};

export default Home;
