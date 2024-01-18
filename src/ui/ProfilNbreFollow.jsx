import React from 'react'

export default function ProfilNbreFollow({ number, texte, classeNumber = "text-white", classeTexte = "text-white" }) {
    return (
        <div className='flex gap-2'>
            <span className={classeNumber}>{number}</span><span className={classeTexte}>{texte}</span>
        </div>
    )
}
