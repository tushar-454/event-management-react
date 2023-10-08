import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './AuthProvider/AuthProvider';
import routes from './Routes/Routes';
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <AuthProvider>
      <RouterProvider router={routes}></RouterProvider>
    </AuthProvider>
  );
}

export default App;
