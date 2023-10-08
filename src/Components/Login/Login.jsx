import { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Button from '../ReusableUI/Button';
import Input from '../ReusableUI/Input';
import LoginWith from '../ReusableUI/LoginWith';
const loginInit = {
  email: '',
  password: '',
};
const errorInit = {
  email: '',
  password: '',
};
const Login = () => {
  const [login, setLogin] = useState({ ...loginInit });
  const [error, setError] = useState({ ...errorInit });
  const { signInEmailPass, loginGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  // handle google login
  const handleGoogleLogin = () => {
    loginGoogle()
      .then((currentUser) => {
        console.log(currentUser.user);
        swal('Login Successfull', '', 'success');
        setTimeout(() => {
          navigate('/');
        }, 1200);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // login input change handle by react way
  const handleInput = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: '' }));
  };
  // handle email and password login
  const handleSigninEmailPassword = (e) => {
    e.preventDefault();
    const { email, password } = login;
    if (!email) {
      setError((prev) => ({ ...prev, email: 'Email required !' }));
      return;
    }
    if (!password) {
      setError((prev) => ({ ...prev, password: 'Password required !' }));
      return;
    }
    signInEmailPass(email, password)
      .then(() => {
        swal('Login Successfull', '', 'success');
        setTimeout(() => {
          navigate('/');
        }, 500);
        setLogin({ ...loginInit });
      })
      .catch((error) => {
        swal('Error was an occur', error.message, 'error');
      });
  };
  return (
    <div>
      <div className='max-w-6xl mx-auto px-4 my-20'>
        <div className='w-full flex justify-center'>
          <div className='w-full sm:w-[570px] px-8 md:px-14 py-8 border border-[#ABABAB] rounded-md'>
            {/* login title */}
            <div className='title mb-8'>
              <h1 className='text-2xl font-bold font-montserrat'>Login</h1>
            </div>
            {/* login form  */}
            <div className='form'>
              <form className='space-y-6' onSubmit={handleSigninEmailPassword}>
                <Input
                  id='email'
                  label='Enter your email'
                  name='email'
                  placeholder='jhonduo@trqp.fto'
                  type='email'
                  error={error.email}
                  value={login.email}
                  handleChange={handleInput}
                />
                <Input
                  id='password'
                  label='Enter your password'
                  name='password'
                  placeholder='dfgWEI93$#F'
                  type='password'
                  toggle={true}
                  error={error.password}
                  value={login.password}
                  handleChange={handleInput}
                />
                {/* remember and forgot  */}
                <div className='flex justify-between items-center'>
                  <div className='flex gap-1'>
                    <input type='checkbox' name='remember' id='remember' />
                    <label htmlFor='remember' className='font-medium'>
                      Remember me
                    </label>
                  </div>
                  <div>
                    <Link
                      to={'/login'}
                      className='font-medium font-montserrat underline underline-offset-2 transition hover:underline-offset-4 text-[#F9A51A]'
                    >
                      Forgot password ?
                    </Link>
                  </div>
                </div>
                <Button
                  displayName='Login'
                  type='submit'
                  style={{ display: 'block', width: '100%' }}
                />
              </form>
            </div>
            {/* create an account  */}
            <div className='text-center my-8'>
              <p className='font-medium'>
                Don’t have an account?{' '}
                <Link
                  to={'/signup'}
                  className='font-medium font-montserrat underline underline-offset-2 transition hover:underline-offset-4 text-[#F9A51A]'
                >
                  Create an account
                </Link>
              </p>
            </div>
            {/* or divider  */}
            <div className='divider relative w-full flex justify-center items-center'>
              <span className='font-medium bg-white absolute w-fit text-center px-1'>
                Or
              </span>
            </div>
            {/* log in with  */}
            <div className='my-8 space-y-3'>
              <LoginWith
                handleClick={handleGoogleLogin}
                displayName={'Login with google'}
                icon={<FcGoogle className='text-3xl' />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
