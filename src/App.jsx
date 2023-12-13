import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './AuthProvider/AuthProvider';
import routes from './Routes/Routes';

const queryClient = new QueryClient();
function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={routes}></RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
