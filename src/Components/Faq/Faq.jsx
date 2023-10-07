import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Accordion from '../ReusableUI/Accordion';
const Faq = () => {
  const faqData = useLoaderData();
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };
  return (
    <section>
      <div className='my-10 container mx-auto lg:w-[60%] w-[90%]'>
        {faqData.map((faq, index) => {
          return (
            <Accordion
              key={index}
              open={index === open}
              faq={faq}
              toggle={() => {
                toggle(index);
              }}
            ></Accordion>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
