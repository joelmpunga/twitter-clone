import React from 'react'

export default function ProfilDateJoin({icone,texte}) {
    return (
        <div className='h-8 align-middle p-2'>
            <div className="flex gap-3 rounded-full h-5 w-full">
                <img src={icone} alt="logo" />
                <h3 className='text-gray-600'>{texte}</h3>
            </div>
        </div>
    )
}
