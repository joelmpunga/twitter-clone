import React from 'react'
import {Link} from 'react-router-dom'


export default function OneMenu({ onglet, icone, route }) {
    return (
        <div className='flex align-top h-14 py-6 px-1 justify-start hover:bg-gray-900 hover:rounded-2xl hover:w-2/3'>
            <Link to={route}>
                <div className="flex gap-3 rounded-full h-5 w-5 " >
                    <img src={icone} alt="logo" />
                    <h2 className='text-white font-bold'>{onglet}</h2>
                </div>
            </Link>
        </div>
    )
}
