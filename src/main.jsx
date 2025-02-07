import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Forpages from './pages/Forpages.jsx'
import Home from './pages/home.jsx';
import Data from './pages/data.jsx';
import Toread from './pages/toread.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Forpages",
    element: <Forpages/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/data",
    element: <Data/>
  },
  {
    path: "/toread",
    element: <Toread/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
