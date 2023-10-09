import { useLoaderData } from 'react-router-dom';

const Calender = () => {
  const calenderApi = useLoaderData();
  return (
    <div className='grid gap-3 md:gap-5 grid-cols-7'>
      <div className='w-8 md:w-12 h-8 md:h-12 border text-3xl font-semibold cursor-pointer bg-[#cbd5e1] transition hover:bg-[#e2e8f0] p-6 md:p-10 flex items-center justify-center'>
        Su
      </div>{' '}
      <div className='w-8 md:w-12 h-8 md:h-12 border text-3xl font-semibold cursor-pointer bg-[#cbd5e1] transition hover:bg-[#e2e8f0] p-6 md:p-10 flex items-center justify-center'>
        Mo
      </div>{' '}
      <div className='w-8 md:w-12 h-8 md:h-12 border text-3xl font-semibold cursor-pointer bg-[#cbd5e1] transition hover:bg-[#e2e8f0] p-6 md:p-10 flex items-center justify-center'>
        Tu
      </div>{' '}
      <div className='w-8 md:w-12 h-8 md:h-12 border text-3xl font-semibold cursor-pointer bg-[#cbd5e1] transition hover:bg-[#e2e8f0] p-6 md:p-10 flex items-center justify-center'>
        We
      </div>{' '}
      <div className='w-8 md:w-12 h-8 md:h-12 border text-3xl font-semibold cursor-pointer bg-[#cbd5e1] transition hover:bg-[#e2e8f0] p-6 md:p-10 flex items-center justify-center'>
        Th
      </div>{' '}
      <div className='w-8 md:w-12 h-8 md:h-12 border text-3xl font-semibold cursor-pointer bg-[#cbd5e1] transition hover:bg-[#e2e8f0] p-6 md:p-10 flex items-center justify-center'>
        Fr
      </div>{' '}
      <div className='w-8 md:w-12 h-8 md:h-12 border text-3xl font-semibold cursor-pointer bg-[#cbd5e1] transition hover:bg-[#e2e8f0] p-6 md:p-10 flex items-center justify-center'>
        Sa
      </div>
      {calenderApi?.map((calender, index) => (
        <div
          data-aos={calender.aos}
          key={index}
          className={`w-8 md:w-12 h-8 md:h-12 border text-2xl font-medium cursor-pointer transition hover:bg-gray-100 p-6 md:p-10 flex items-center justify-center relative group ${
            calender.isEvent && 'bg-gray-300/40'
          }`}
        >
          <p className='flex flex-col'>
            <span>{calender.date}</span>
            {calender.isEvent ? (
              <small className='text-red-400 font-normal text-[10px] md:text-[1.125rem]'>
                {calender.isEvent && 'Booked'}
              </small>
            ) : (
              <small className='text-green-400 font-normal text-[10px] md:text-[1.125rem]'>
                {calender.isEvent || 'Available'}
              </small>
            )}
          </p>
          {calender.isEvent && (
            <div className='absolute w-40 md:w-64 bg-gray-200/50 backdrop-blur p-3 -top-20 transition scale-0 origin-center group-hover:scale-100'>
              <p className='text-sm md:text-2xl'>{calender.eventName}</p>
              <p className='text-sm md:text-2xl'>{calender.time}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Calender;
