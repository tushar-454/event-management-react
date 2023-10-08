import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);

  if (!user) {
    swal('Login first !', '', 'info');
    return <Navigate to={'/login'} replace={true} />;
  }
  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
