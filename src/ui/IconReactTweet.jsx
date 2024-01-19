import React, { useState } from 'react'
import formatNumber from '../functions/formatNumber'

export default function IconReactTweet({ countNumber, icone, svg, textColor }) {
    const [isClicked, setCount] = useState(false)
    return (
        <div className='h-8 align-middle p-2' onClick={() => { setCount(!isClicked) }}>
            <div className="flex gap-3 rounded-full h-5 w-5 ">
                {
                    isClicked ? <img src={icone} alt="logo" /> : <img src={svg} alt="logo" />

                }
                {
                    isClicked ? <small className={textColor}>{formatNumber((countNumber*1)+1)}</small> : <small className='text-white'>{formatNumber(countNumber)}</small>
                }
            </div>
        </div>
    )
}
