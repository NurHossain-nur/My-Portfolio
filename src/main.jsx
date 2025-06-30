import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'

import 'swiper/css';
import 'swiper/css/navigation';

import { RouterProvider } from 'react-router'
import router from './Router/router.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 6000,
  once: true,
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
