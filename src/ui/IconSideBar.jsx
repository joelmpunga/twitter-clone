import React from 'react'


export default function IconSideBar({onglet}) {
    return (
        <div className='h-8 align-middle p-2'>
            <div className="flex gap-3 rounded-full h-5 w-5">
                <img src={icone} alt="logo" />
                <h2 className='text-white font-bold'>{onglet}</h2>
            </div>
        </div>
    )
}
