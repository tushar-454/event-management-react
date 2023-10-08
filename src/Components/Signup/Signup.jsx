import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { storage } from '../../firebase/firebase-config';
import Button from '../ReusableUI/Button';
import Input from '../ReusableUI/Input';
import Photoupload from '../ReusableUI/Photoupload';

const registerInit = {
  name: '',
  email: '',
  photoUrl: '',
  password: '',
  confirmPassword: '',
};
const errorInit = {
  name: '',
  email: '',
  photoUrl: '',
  password: '',
  confirmPassword: '',
};
const Register = () => {
  const [register, setRegister] = useState({ ...registerInit });
  const [error, setError] = useState({ ...errorInit });
  const [photoName, setPhotoName] = useState('');

  // input change control by react and error hide
  const handleInput = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: '' }));
  };
  // handle photo upload control
  const handleProfileUpload = (e) => {
    const imageName = e.target.files[0].name;
    const random = new Date().getTime();
    const path = `images/${random}_${imageName}`;
    setPhotoName(imageName);
    const imagesRef = ref(storage, path);
    uploadBytes(imagesRef, e.target.files[0])
      .then(() => {
        getDownloadURL(ref(storage, path))
          .then((url) => {
            setRegister((prev) => ({ ...prev, photoUrl: url }));
          })
          .catch((error) => {
            swal('Error was an occur', error.message, 'error');
          });
      })
      .catch((error) => {
        swal('Error was an occur', error.message, 'error');
      });
  };
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
                error={error.name}
                value={register.name}
                handleChange={handleInput}
              />
              <Input
                id='email'
                label='Enter your email'
                name='email'
                placeholder='jhonduo@trqp.fto'
                type='email'
                error={error.email}
                value={register.email}
                handleChange={handleInput}
              />
              <Photoupload
                displayName='Upload Profile Picture'
                handleProfileUpload={handleProfileUpload}
                photoName={photoName}
              />
              <Input
                id='password'
                label='Enter your password'
                name='password'
                placeholder='dfgWEI93$#F'
                type='password'
                toggle={true}
                error={error.password}
                value={register.password}
                handleChange={handleInput}
              />

              <Input
                id='confirmPassword'
                label='Confirm your password'
                name='confirmPassword'
                placeholder='dfgWEI93$#F'
                type='password'
                toggle={true}
                error={error.confirmPassword}
                value={register.confirmPassword}
                handleChange={handleInput}
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
