import { sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';
import Toast from '../../Utils/Toast/Toast';
import Auth from '../../firebase/firebase-config';
import Button from '../ReusableUI/Button';
import Input from '../ReusableUI/Input';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!email) {
      return Toast('Please enter your valid email.', 'info');
    }
    sendPasswordResetEmail(Auth, email)
      .then(() => {
        Toast('Password reset email sent!', 'success');
      })
      .catch(() => {
        Toast('There was an error', 'error');
      });
  };
  return (
    <div>
      <div className='max-w-6xl mx-auto px-4 my-20'>
        <div className='w-full flex justify-center'>
          <div className='w-full sm:w-[570px] px-8 md:px-14 py-8 border border-[#ABABAB] rounded-md'>
            <div className='title mb-8'>
              <h1 className='text-2xl font-bold font-montserrat'>
                Reset Password
              </h1>
            </div>
            <div className='form'>
              <form className='space-y-6' onSubmit={handleResetPassword}>
                <Input
                  id='email'
                  label='Enter your email'
                  name='email'
                  placeholder='jhonduo@trqp.fto'
                  type='email'
                  value={email}
                  handleChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  displayName='Reset Password'
                  type='submit'
                  style={{ display: 'block', width: '100%' }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
