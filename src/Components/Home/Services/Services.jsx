import { useQuery } from '@tanstack/react-query';

import useAxios from '../../../Hook/useAxios';
import SectionHead from '../../ReusableUI/SectionHead';
import Service from './Service';
const Services = () => {
  const axios = useAxios();

  const { data: servicesApi, isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const res = await axios.get('/services');
      return res.data;
    },
  });

  return (
    <div className='w-full'>
      <div className='mx-auto max-w-screen-2xl px-4 my-20'>
        <SectionHead
          title='Our Services'
          subTitle='Seamless Solutions Tailored to Your Event NeedsElevate your events with our expertise. From planning to execution, we offer comprehensive solutions that bring your vision to life.'
        />
        {/* all services wrap  */}
        <div className='grid gap-20 content-center justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {!isLoading &&
            servicesApi?.map((service, index) => (
              <Service key={index} service={service} />
            ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
