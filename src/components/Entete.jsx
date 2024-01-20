import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function Entete() {
    let { id } = useParams()
    return (
        <div className='flex justify-between border border-gray-700 p-3'>
            <Link to="/"><h2 className='text-white font-bold'>Home {id}</h2></Link>
            <img src="src/assets/starsIcon.svg" alt="star icon"/>
        </div>
    )
}
