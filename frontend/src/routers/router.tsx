import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import HomePage from '../pages/HomePage';
import Collection from '../pages/Collection';
import About from '../pages/About';
import Contact from '../pages/Contact';

import StudioPage from '../pages/StudioPage';
import LifeStyle from '../components/LifeStyle';
import Price from '../pages/Price';
import Niche from '../pages/Niche';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'niche/collection', element: <Collection /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'niche', element: <Niche /> },
      { path: 'niche/studio', element: <StudioPage /> },
      { path: 'niche/lifestyle', element: <LifeStyle /> },

      { path: 'price', element: <Price /> },
    ],
  },
]);

export default router;
