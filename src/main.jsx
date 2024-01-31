import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NewTweeter from './components/NewTweeter.jsx'
import AllTweets from './components/AllTweets.jsx'
import ProfilEntete from './components/ProfilEntete.jsx'
import Root from './components/Root.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Error404 from './components/Error404.jsx'
import Timeline from './components/Timeline.jsx'
import ModifierProfil from './components/ModifierProfil.jsx'
import store from './app/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root><Timeline><Outlet /></Timeline></Root>,
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
        path: "/profil/edit/:id",
        element: <ModifierProfil/>,
        errorElement: <Error404 />,
      },
      {
        path: '*',
        element: <Error404 />,
      },
    ]
  },
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
