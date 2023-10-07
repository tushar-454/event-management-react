import { useLoaderData } from 'react-router-dom';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
  const servicesApi = useLoaderData();
  console.log(servicesApi);
  return (
    <div>
      <Banner />
      <Services servicesApi={servicesApi} />
    </div>
  );
};

export default Home;
