import { useEffect, useState } from 'react';
import SectionHead from '../../ReusableUI/SectionHead';
import Plan from './Plan';

const Pricing = () => {
  const [plan, setPlan] = useState([]);
  useEffect(() => {
    fetch('/pricing_plan.json')
      .then((res) => res.json())
      .then((plan) => setPlan(plan));
  }, []);
  return (
    <div className='w-full bg-[#87ceeb09] py-4'>
      <div className='mx-auto max-w-screen-2xl px-4 my-20'>
        <SectionHead
          title='Pricing'
          subTitle='Creating Memorable Experiences Within Your Budget: Discover Our Versatile Event Pricing Plans Designed Just for You.'
        />
        {/* all pricing plan wrap  */}
        <div className='grid gap-10 content-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {plan?.map((singlePlan, index) => (
            <Plan key={index} singlePlan={singlePlan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
