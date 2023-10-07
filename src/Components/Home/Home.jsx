import { useLoaderData } from 'react-router-dom';
import Banner from './Banner/Banner';
import Pricing from './Pricing/Pricing';
import Services from './Services/Services';

const Home = () => {
  const servicesApi = useLoaderData();
  return (
    <>
      <Banner />
      <Services servicesApi={servicesApi} />
      <Pricing />
    </>
  );
};

export default Home;
