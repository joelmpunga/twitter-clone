import React from 'react'
import Title from '../ui/Title'

export default function NameAccount({user}) {
    return (
        <div>
            <div className='flex'>
                <Title content= {user.name} classe="text-white font-bold" />
                <img src="src/assets/Private.svg" />
            </div>
            <Title content={"@"+user.name} classe="text-gray-600" />
        </div>
    )
}

