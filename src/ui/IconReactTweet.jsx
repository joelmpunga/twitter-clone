import React, { useState } from 'react'
import formatNumber from '../functions/formatNumber'
import { useNavigate } from 'react-router-dom'

export default function IconReactTweet({ countNumber, iconeClick, svgDefault, textColor, iconeOver, routeClicked = "", routeNoClicked = "" }) {
    const [isClicked, setIsClicked] = useState(false)
    const [isMouseOver, setIsMouseOver] = useState(false)
    const [route, setRoute] = useState(routeNoClicked)
    const handleClick = () => {
        setIsClicked(!isClicked)
        if (isClicked)
            setRoute(routeClicked)
        else
            setRoute(routeNoClicked)
    }
    return (
        <>
            <div type="submit" className='h-8 align-middle p-2' onClick={() => { handleClick }} onMouseOver={() => { setIsMouseOver(true) }} onMouseOut={() => { setIsMouseOver(false) }}>
                <div className="flex gap-3 rounded-full h-5 w-5 ">
                    {
                        isClicked ? <img src={iconeClick} alt="logo" /> : (isMouseOver ? <img src={iconeOver} alt="logo" /> : <img src={svgDefault} alt="logo" />)

                    }
                    {
                        isClicked ? <small className={textColor}>{formatNumber((countNumber * 1) + 1)}</small> : (isMouseOver ? <small className={textColor}>{formatNumber((countNumber))}</small> : <small className='text-gray-500'>{formatNumber(countNumber)}</small>)

                    }
                </div>
            </div>
        </>
    )
}
