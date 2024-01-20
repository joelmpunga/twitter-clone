import React from 'react'
import Entete from './Entete'
import NewTweeter from './NewTweeter'
import AllTweets from './AllTweets'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import ProfilEntete from './ProfilEntete'



export default function Timeline({children}) {
    return (
        <div className='w-1/3 mx-auto h-full'>
            <Entete />
            {
                children
            }
        </div>
    )
}
