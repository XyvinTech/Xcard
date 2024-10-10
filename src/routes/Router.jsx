import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../Layout';
import Team from '../pages/Team';
import MobileApp from '../pages/MobileApp';
import Shop from '../pages/Shop';
import Support from '../pages/Support';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
    ],
  },
  {
    path: '/team',
    element: <Layout />, 
    children: [
      { path: '', element: <Team /> },
    ],
  },
  {
    path: '/mobile-app',
    element: <Layout />, 
    children: [
      { path: '', element: <MobileApp /> },
    ],
  },
  {
    path: '/shop',
    element: <Layout />, 
    children: [
      { path: '', element: <Shop /> },
    ],
  },
  {
    path: '/support',
    element: <Layout />, 
    children: [
      { path: '', element: <Support /> },
    ],
  },
]);

export default router;
