import React from 'react';
// import Navbar from './Components/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from 'react-router-dom';
import Home from './pages/home/Home';
import Footer from './Footer/Footer';
import Gigs from './pages/gigs/Gigs';
import Gig from './pages/gig/Gig';
import Orders from './pages/orders/Orders';
import Mygigs from './pages/mygigs/Mygigs';
import Messages from './pages/messages/Messages';
import Message from './pages/message/Message';
import Navbar from './Components/navbar/Navbar';
import Add from './pages/add/Add';

const App = () => {
  const Layout = () => {
    return (
      <>
        <Navbar />

        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/gigs',
          element: <Gigs />,
        },
        {
          path: '/gigs/:id',
          element: <Gig />,
        },
        {
          path: '/orders',
          element: <Orders />,
        },
        {
          path: '/mygigs',
          element: <Mygigs />,
        },
        {
          path: '/messages',
          element: <Messages />,
        },
        {
          path: '/message/:id',
          element: <Message />,
        },
        {
          path: '/add',
          element: <Add />,
        },
      ],
    },
    {
      path: 'about',
      element: <div>About</div>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
