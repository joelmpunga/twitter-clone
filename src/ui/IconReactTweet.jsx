import React from 'react'

export default function IconReactTweet({ countNumber, icone }) {
    return (
        <div className='h-8 align-middle p-2'>
            <div className="flex gap-3 rounded-full h-5 w-5">
                <img src={icone} alt="logo" />
                <small className='text-white'>{countNumber}</small>
            </div>
        </div>
    )
}
