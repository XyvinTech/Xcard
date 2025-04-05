import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../Layout";
import Team from "../pages/Team";
import MobileApp from "../pages/MobileApp";
import Shop from "../pages/Shop";
import Support from "../pages/Support";
import QRStand from "../pages/QRStand";
import Restaurant from "../pages/Restaurant";
import Products from "../pages/Products";
import ThankPage from "../pages/ThankPage";
import ProfilePge from "../pages/ProfilePge";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "", element: <Home /> }],
  },
  {
    path: "/team",
    element: <Layout />,
    children: [{ path: "", element: <Team /> }],
  },
  {
    path: "/products",
    element: <Layout />,
    children: [{ path: "", element: <Products /> }],
  },
  {
    path: "/products/membershipmanagementsystem",
    element: <Layout />,
    children: [{ path: "", element: <MobileApp /> }],
  },
  {
    path: "/products/digitalcatalogue",
    element: <Layout />,
    children: [{ path: "", element: <QRStand /> }],
  },
  {
    path: "/products/digitalprofile",
    element: <Layout />,
    children: [{ path: "", element: <ProfilePge /> }],
  },
  {
    path: "/products/businesscard",
    element: <Layout />,
    children: [{ path: "", element: <Shop /> }],
  },
  {
    path: "/products/digitalrestaurantmenu",
    element: <Layout />,
    children: [{ path: "", element: <Restaurant /> }],
  },
  {
    path: "/support",
    element: <Layout />,
    children: [{ path: "", element: <Support /> }],
  },
  {
    path: "/thank",
    element: <Layout />,
    children: [{ path: "", element: <ThankPage /> }],
  },
]);

export default router;
