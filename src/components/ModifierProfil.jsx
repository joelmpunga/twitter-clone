import React from 'react'
import ImageSmallArrounded from '../ui/ImageSmallArrounded'
import { Link } from 'react-router-dom'
import ButtonArrounded from '../ui/ButtonArrounded'
import FieldModifierProfil from '../ui/FieldModifierProfil'
import { useSelector, useDispatch } from 'react-redux'
import { modify, increment } from './profilSlice'

export default function ModifierProfil() {
    return (
        <div className='border border-gray-600 text-white' >
            <ButtonArrounded texte="Sauvegarder" color="bg-white text-black font-bold" taille="w-40 h-10 ml-[70%] my-2" />
            <img src="https://picsum.photos/2048/1024?random=1313494418314457090" alt="" className='w-full h-60' />
            <div className='-mt-20 mx-4 flex justify-between'>
                <ImageSmallArrounded src="https://picsum.photos/200?random=1548956601000" classe="h-40 w-40 border" />
            </div>
            <div className='w-full px-4 py-5'>
                <FieldModifierProfil isTextArea={false} labelText="Nom" />
                <FieldModifierProfil isTextArea={true} labelText="Biographie" />
                <FieldModifierProfil isTextArea={false} labelText="Emplacement" />
                <FieldModifierProfil isTextArea={false} labelText="Site web" />
            </div>
        </div>
    )
}
