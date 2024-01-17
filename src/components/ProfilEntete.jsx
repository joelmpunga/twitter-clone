import React from 'react'
import ImageSmallArrounded from '../ui/ImageSmallArrounded'
import ButtonArrounded from '../ui/ButtonArrounded'

export default function ProfilEntete() {
    return (
        <div>
            <img src="https://picsum.photos/2048/1024?random=1313494418314457090" alt="" className='w-full max-h-60' />
            <div className='-mt-20 mx-4 flex justify-between'>
                <ImageSmallArrounded src="src/assets/Profile-Photo.svg" classe="h-40 w-40" />
                <ButtonArrounded texte="Edit profile" color="text-white border border-white" taille="w-40 h-10 mt-20" />
            </div>
        </div>
    )
}
