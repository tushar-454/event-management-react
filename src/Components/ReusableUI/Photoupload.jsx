import PropTypes from 'prop-types';

const Photoupload = ({
  displayName,
  photoName,
  handleProfileUpload,
  error,
}) => {
  return (
    <>
      <div className='text-[2xl] outline-none border border-[#C5C5C5] px-5 py-2 bg-transparent duration-700 flex-col justify-center items-center block mb-1 font-montserrat text-[#272749] font-medium text-center transition hover:border-[#F9A51A]'>
        <label
          className='block cursor-pointer text-center'
          htmlFor='profileImg'
        >
          {displayName}
        </label>
        <input
          className='hidden'
          type='file'
          name='photoInput'
          id='profileImg'
          onChange={handleProfileUpload}
          accept='.png, .jpg, .jpeg'
        />
        <p className=' text-green-600 text-[14px] text-center'>{photoName}</p>
      </div>
      {error && <p className='text-red-500 italic transition'>{error}</p>}
    </>
  );
};

Photoupload.propTypes = {
  displayName: PropTypes.string,
  photoName: PropTypes.string,
  error: PropTypes.string,
  handleProfileUpload: PropTypes.func,
};

export default Photoupload;
