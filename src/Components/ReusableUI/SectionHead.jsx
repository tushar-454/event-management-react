import PropTypes from 'prop-types';

const SectionHead = ({ title, subTitle }) => {
  return (
    <div className='flex flex-col items-center gap-4 my-20'>
      <h2 className='text-6xl font-extrabold'>{title}</h2>
      <p className='w-full lg:w-[960px] text-center'>{subTitle}</p>
    </div>
  );
};

SectionHead.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default SectionHead;
