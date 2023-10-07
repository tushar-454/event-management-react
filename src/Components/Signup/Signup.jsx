import { Link } from 'react-router-dom';
import Button from '../ReusableUI/Button';
import Input from '../ReusableUI/Input';

const Register = () => {
  // const [photoName, setPhotoName] = useState('');

  return (
    <div className='max-w-6xl mx-auto px-4 my-20'>
      <div className='w-full flex justify-center'>
        <div className='w-full sm:w-[570px] px-8 md:px-14 py-8 border border-[#ABABAB] rounded-md'>
          {/* signup title */}
          <div className='title mb-8'>
            <h1 className='text-2xl font-bold font-montserrat'>
              Create an account
            </h1>
          </div>
          {/* signup form  */}
          <div className='form'>
            <form className='space-y-6'>
              <Input
                id='name'
                label='Enter your full name'
                name='name'
                placeholder='jhon dou'
                type='text'
                // error={error.name}
                // value={register.name}
                // handleChange={handleInput}
              />
              <Input
                id='email'
                label='Enter your email'
                name='email'
                placeholder='jhonduo@trqp.fto'
                type='email'
                // error={error.email}
                // value={register.email}
                // handleChange={handleInput}
              />
              {/* <Input
                id='photoUrl'
                label='Your photo url'
                name='photoUrl'
                placeholder='https://photo.com/myphoto.jpg'
                type='url'
                error={error.photoUrl}
                value={register.photoUrl}
                handleChange={handleInput}
                disable={true}
              /> */}
              <div className='text-[2xl] outline-none border border-[#C5C5C5] px-5 py-2 bg-transparent duration-700 flex-col justify-center items-center block mb-1 font-montserrat text-[#272749] font-medium text-center transition hover:border-[#F9A51A]'>
                <label
                  className='block cursor-pointer text-center'
                  htmlFor='profileImg'
                >
                  Upload Profile Picture
                </label>
                <input
                  className='hidden'
                  type='file'
                  name='photoInput'
                  id='profileImg'
                  // onChange={handleProfileUpload}
                  accept='.png, .jpg, .jpeg'
                />
                <p className=' text-green-600 text-[14px] text-center'>
                  {/* {photoName} */}
                </p>
              </div>
              <Input
                id='password'
                label='Enter your password'
                name='password'
                placeholder='dfgWEI93$#F'
                type='password'
                toggle={true}
                // error={error.password}
                // value={register.password}
                // handleChange={handleInput}
              />

              <Input
                id='confirmPassword'
                label='Confirm your password'
                name='confirmPassword'
                placeholder='dfgWEI93$#F'
                type='password'
                toggle={true}
                // error={error.confirmPassword}
                // value={register.confirmPassword}
                // handleChange={handleInput}
              />

              <Button
                displayName='Signup'
                type='submit'
                style={{ display: 'block', width: '100%' }}
              />
            </form>
          </div>
          {/* create an account  */}
          <div className='text-center my-8'>
            <p className='font-medium'>
              Already have an account?{' '}
              <Link
                to={'/login'}
                className='font-medium font-montserrat underline underline-offset-2 transition hover:underline-offset-4 text-[#F9A51A]'
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
