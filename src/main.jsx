import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Entete from './components/Entete.jsx'
import NewTweeter from './components/NewTweeter.jsx'
import AllTweets from './components/AllTweets.jsx'
import ProfilEntete from './components/ProfilEntete.jsx'
import Root from './components/Root.jsx'
import Wrapper from './components/Wrapper.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Error404 from './components/Error404.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root><Wrapper><Outlet /></Wrapper></Root>,
    children: [
      {
        path: "/",
        element: <><NewTweeter /><AllTweets /></>,
        errorElement: <Error404 />,
      },
      {
        path: "/profil",
        element: <ProfilEntete />,
        errorElement: <Error404 />,
      },
      {
        path: '*',
        element: <Error404 />,
      }
    ]
  },
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
