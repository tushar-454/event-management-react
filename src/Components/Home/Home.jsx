import { useLoaderData } from 'react-router-dom';
import Pricing from '../Pricing/Pricing';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
  const servicesApi = useLoaderData();
  console.log(servicesApi);
  return (
    <>
      <Banner />
      <Services servicesApi={servicesApi} />
      <Pricing />
    </>
  );
};

export default Home;
