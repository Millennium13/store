import React from 'react';
import { Navigate } from 'react-router-dom';
import Users from '../views/Users/List';
import Home from '../containers/Home';

import Home_1 from '../pages/home_1';
import Shop from '../pages/shop';
import Features from '../pages/features';
import Blog from '../pages/blog';
import About from '../pages/about';
import Contact from '../pages/contact';

export const routes = [
  {
    // element: <Home />,
    children: [
      { index: true, element: <Home /> },
      { path: '/users', element: <Users /> },

      { path: '/home_1', element: <Home_1 /> },
      { path: '/shop', element: <Shop /> },
      { path: '/features', element: <Features /> },
      { path: '/blog', element: <Blog /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },

      { path: '*', element: <Navigate to='/' /> },
    ],
  },
];
