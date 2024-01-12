import React from 'react'
import formatNumber from '../functions/formatNumber'

export default function IconReactTweet({ countNumber, icone }) {
    return (
        <div className='h-8 align-middle p-2'>
            <div className="flex gap-3 rounded-full h-5 w-5">
                <img src={icone} alt="logo" />
                <small className='text-white'>{formatNumber(countNumber)}</small>
            </div>
        </div>
    )
}
