/* eslint-disable no-useless-escape */
import { updateProfile } from 'firebase/auth';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useContext, useState } from 'react';
import { BsCheck2All } from 'react-icons/bs';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { storage } from '../../firebase/firebase-config';
import Button from '../ReusableUI/Button';
import Checkbox from '../ReusableUI/Checkbox';
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
  terms: false,
};
const dynamicError = {
  uppercase: false,
  lowercase: false,
  special: false,
  length: false,
};
const Signup = () => {
  const [register, setRegister] = useState({ ...registerInit });
  const [error, setError] = useState({ ...errorInit });
  const [isShow, setIsShow] = useState(false);
  const [terms, setTerms] = useState(false);
  const [photoName, setPhotoName] = useState('');
  const { user, signupEmailPass, setUpdateProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  // input change control by react and error hide
  const handleInput = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: '' }));
    if (name === 'password') {
      setIsShow(true);
      // password strong check
      if (value.length >= 6) {
        dynamicError.length = true;
      } else {
        dynamicError.length = false;
      }
      if (/[A-Z]/.test(value)) {
        dynamicError.uppercase = true;
      } else {
        dynamicError.uppercase = false;
      }
      if (/[a-z]/.test(value)) {
        dynamicError.lowercase = true;
      } else {
        dynamicError.lowercase = false;
      }
      if (/[\W_]/.test(value)) {
        dynamicError.special = true;
      } else {
        dynamicError.special = false;
      }
    }
  };
  // handle photo upload control
  const handleProfileUpload = (e) => {
    const imageName = e.target.files[0].name;
    const random = new Date().getTime();
    const path = `images/${random}_${imageName}`;
    setError((prev) => ({ ...prev, photoUrl: '' }));
    setPhotoName('Uploading...');
    const imagesRef = ref(storage, path);
    uploadBytes(imagesRef, e.target.files[0])
      .then(() => {
        getDownloadURL(ref(storage, path))
          .then((url) => {
            setRegister((prev) => ({ ...prev, photoUrl: url }));
            setPhotoName('Completed.');
            setTimeout(() => {
              setPhotoName(imageName);
            }, 1000);
          })
          .catch((error) => {
            swal('Error was an occur', error.message, 'error');
          });
      })
      .catch((error) => {
        swal('Error was an occur', error.message, 'error');
      });
  };
  // handle account create
  const handleSignupEmailPassword = (e) => {
    e.preventDefault();
    const { name, email, photoUrl, password, confirmPassword } = register;
    if (!name) {
      setError((prev) => ({ ...prev, name: 'name required !' }));
      return;
    } else if (name.length < 3) {
      setError((prev) => ({ ...prev, name: 'name must be 3 characters !' }));
      return;
    }
    if (!email) {
      setError((prev) => ({ ...prev, email: 'Email Required !' }));
      return;
    } else if (
      !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/.test(
        email
      )
    ) {
      setError((prev) => ({ ...prev, email: 'Email not valid !' }));
      return;
    }
    if (!photoUrl) {
      setError((prev) => ({ ...prev, photoUrl: 'Upload your Photo !' }));
      return;
    }
    if (!password) {
      setError((prev) => ({ ...prev, password: 'Password Required' }));
      return;
    } else if (!/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) {
      setError((prev) => ({
        ...prev,
        password: '',
      }));
      return;
    }

    if (!confirmPassword) {
      setError((prev) => ({
        ...prev,
        confirmPassword: 'Confirm password Required',
      }));
      return;
    } else if (password !== confirmPassword) {
      setError((prev) => ({
        ...prev,
        confirmPassword: 'Confirm password and password not matched !',
      }));
      return;
    }
    if (!terms) {
      setError((prev) => ({
        ...prev,
        terms: true,
      }));
      return;
    }
    signupEmailPass(email, password)
      .then((currentUser) => {
        updateProfile(currentUser.user, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {})
          .catch((error) => swal('Error was an occur', error.message, 'error'));
        swal('Account Create Successfull', '', 'success');
        setUpdateProfile({ photo: photoUrl, name: name });
        setTerms(false);
        setTimeout(() => {
          navigate('/');
        }, 500);
        setRegister({ ...registerInit });
      })
      .catch((error) => {
        swal('Error was an occur', error.message, 'error');
      });
  };
  if (user) {
    return <Navigate to={'/'} replace={true} />;
  }
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
                error={error.photoUrl}
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

              {/* dynamicError show  */}
              <div className={`hidden ${isShow && '!block'}`}>
                <div
                  className={`flex gap-2 items-center ${
                    dynamicError.lowercase ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  <BsCheck2All />
                  <p>Must one lowercase</p>
                </div>
                <div
                  className={`flex gap-2 items-center ${
                    dynamicError.uppercase ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  <BsCheck2All />
                  <p>Must one uppercase</p>
                </div>
                <div
                  className={`flex gap-2 items-center ${
                    dynamicError.special ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  <BsCheck2All />
                  <p>Must one special character</p>
                </div>
                <div
                  className={`flex gap-2 items-center ${
                    dynamicError.length ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  <BsCheck2All />
                  <p>Password must be 6 characters</p>
                </div>
              </div>
              <Checkbox
                name='terms'
                displayName='Accept our Terms and Condition'
                checked={terms}
                error={error.terms}
                handleChange={() => setTerms(!terms)}
              />
              <Button
                displayName='Signup'
                type='submit'
                style={{ display: 'block', width: '100%' }}
                handleClick={handleSignupEmailPassword}
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

export default Signup;
