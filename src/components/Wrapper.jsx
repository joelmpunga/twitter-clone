import React from 'react'
import Entete from './Entete'
import NewTweeter from './NewTweeter'
import AllTweets from './AllTweets'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import ProfilEntete from './ProfilEntete'



export default function Wrapper({children}) {
    return (
        <div className='w-1/3 mx-auto h-full'>
            <Entete />
            {
                children
            }
        </div>
    )
}
