import PropTypes from 'prop-types';

const SectionHead = ({ title, subTitle }) => {
  return (
    <div
      data-aos='fade-down'
      className='text-center mx-auto mb-8 max-w-screen-md lg:mb-16'
    >
      <h2 className='mb-4 text-5xl md:text-6xl tracking-tight font-extrabold text-gray-900'>
        {title}
      </h2>
      <p className='font-light text-gray-700 sm:text-xl'>{subTitle}</p>
    </div>
  );
};

SectionHead.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default SectionHead;
