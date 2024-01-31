import { Link, useLocation } from 'react-router-dom'
import ButtonArrounded from '../ui/ButtonArrounded'

export default function Entete() {
    const location = useLocation()
    return (
        <div className='flex justify-between border border-gray-700 p-3 text-white'>
            <Link to="/">
                <h2 className='text-white font-bold'>
                    {location.pathname === '/' ? "Home" : <img src="src/assets/arrow-left-solid.svg" /> }
                </h2>
            </Link>
            {location.pathname.match(/profil\/edit/) ? <ButtonArrounded texte="Sauvegarder" color="bg-white text-black font-bold" taille="w-40 h-10"/> : <img src="src/assets/starsIcon.svg" alt="star icon" /> }
            
        </div>
    )
}