import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Wrap routes with Layout
    children: [
      { path: '', element: <Home /> },
    ],
  },
]);

export default router;
