import React, { useState } from 'react'
import formatNumber from '../functions/formatNumber'

export default function IconReactTweet({ countNumber, icone, svg }) {
    const [count, setCount] = useState(false)
    return (
        <div className='h-8 align-middle p-2'>
            <div className="flex gap-3 rounded-full h-5 w-5 " onClick={() => { setCount(!count) }}>
                {
                    count ? <img src={icone} alt="logo" /> : <img src={svg} alt="logo" />

                }
                {
                    count ? <small className='text-red-500'>{formatNumber(countNumber)}</small> : <small className='text-white'>{formatNumber(countNumber)}</small>
                }
            </div>
        </div>
    )
}
