import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const { pathname } = useLocation();

  if (loading) {
    return (
      <div className='flex items-center justify-center w-full h-56 border border-gray-200 rounded-lg bg-gray-50'>
        <div className='px-10 py-4 text-3xl font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse'>
          loading...
        </div>
      </div>
    );
  }

  if (!user) {
    swal('Login first !', '', 'info');
    return <Navigate to={'/login'} state={pathname} replace={true} />;
  }
  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
