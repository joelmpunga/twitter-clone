import React from 'react'
import ImageSmallArrounded from '../ui/ImageSmallArrounded'
import ButtonArrounded from '../ui/ButtonArrounded'
import NameAccount from './NameAccount'
import { Link } from 'react-router-dom'
import ProfilNbreFollow from '../ui/ProfilNbreFollow'
import ProfilDateJoin from './ProfilDateJoin'
import ProfilOnglets from './ProfilOnglets'

export default function ProfilEntete() {
    return (
        <div className='border border-gray-600'>
            <img src="https://picsum.photos/2048/1024?random=1313494418314457090" alt="" className='w-full max-h-60' />
            <div className='-mt-20 mx-4 flex justify-between'>
                <ImageSmallArrounded src="src/assets/Profile-Photo.svg" classe="h-40 w-40" />
                <ButtonArrounded texte="Edit profile" color="text-white border border-white" taille="w-40 h-10 mt-20"/>
            </div>
            <div className='ml-2'>
                <NameAccount />
            </div>
            <div className='mt-3 flex gap-2 flex-col p-3'>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officiis aspernatur ut quas amet autem veritatis laudantium molestias at expedita molestiae perspiciatis nisi consequatur eos ratione repellendus sapiente, est ab.</p>
                <Link to="/profil" className='text-blue-600 hover:underline'>Translate bio</Link>
            </div>
            <ProfilDateJoin icone="src/assets/Schedule.svg" texte="Joined Octobre 2021"/>
            <div className='flex gap-6 p-3'>
                <ProfilNbreFollow number="24" texte="Following" classeTexte="text-gray-600 hover:underline" classeNumber="text-white"/>
                <ProfilNbreFollow number="9" texte="Followers" classeTexte="text-gray-600 hover:underline" classeNumber="text-white"/>
            </div>
            <div>
                <ProfilOnglets/>
            </div>
        </div>
    )
}
