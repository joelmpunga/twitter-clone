import React from 'react'
import Title from '../ui/Title'

export default function NameAccount() {
    return (
        <div>
            <div className='flex'>
                <Title content="Joel MPUNGA" classe="text-white font-bold" />
                <img src="src/assets/Private.svg" />
            </div>
            <Title content="@JoelMPUNGA56789" classe="text-gray-600" />
        </div>
    )
}

