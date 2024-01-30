import React from 'react'

export default function ModifierProfil() {
  return (
    <div>
      <img src="https://picsum.photos/2048/1024?random=1313494418314457090" alt="" className='w-full h-60' />
            <div className='-mt-20 mx-4 flex justify-between'>
                <ImageSmallArrounded src="src/assets/Profile-Photo.svg" classe="h-40 w-40" />
                <Link to = '/profil/edit/:id'>
                    <ButtonArrounded texte="Edit profile" color="text-white border border-white hover:bg-gray-800" taille="w-40 h-10 mt-24"/>
                </Link>
            </div>
    </div>
  )
}
