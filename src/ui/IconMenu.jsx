import React from 'react'
import {Link} from 'react-router-dom'


export default function IconMenu({ onglet, icone, route }) {
    return (
        <div className='h-8 align-middle py-6 px-1 justify-start'>
            <Link to={route}>
                <div className="flex gap-3 rounded-full h-5 w-5" >
                    <img src={icone} alt="logo" />
                    <h2 className='text-white font-bold'>{onglet}</h2>
                </div>
            </Link>
        </div>
    )
}
