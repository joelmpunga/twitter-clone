import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Entete() {
    const location = useLocation()
    return (
        <div className='flex justify-between border border-gray-700 p-3'>
            <Link to="/">
                <h2 className='text-white font-bold'>
                    {location.pathname === '/' ? "Home" : <img src="src/assets/arrow-left-solid.svg" /> }
                </h2>
            </Link>
            <img src="src/assets/starsIcon.svg" alt="star icon" />
        </div>
    )
}