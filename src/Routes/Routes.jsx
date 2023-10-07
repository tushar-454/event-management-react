import { createBrowserRouter } from 'react-router-dom';
import Error from '../Components/Error/Error';
import EventCalendar from '../Components/EventCalendar/EventCalendar';
import Faq from '../Components/Faq/Faq';
import Home from '../Components/Home/Home';
import ServicesDetails from '../Components/Home/Services/ServicesDetails';
import Layout from '../Components/Layout/Layout';
import Login from '../Components/Login/Login';
import Signup from '../Components/Signup/Signup';
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/services.json'),
      },
      {
        path: '/faq',
        element: <Faq />,
      },
      {
        path: '/event-clender',
        element: <EventCalendar />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/service/:serviceName',
        element: <ServicesDetails />,
        loader: () => fetch('/services.json'),
      },
    ],
  },
]);

export default routes;
