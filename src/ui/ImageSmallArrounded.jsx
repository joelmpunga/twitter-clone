import React from 'react'

export default function ImageSmallArrounded({src,classe}) {
  return (
    <img className={classe+' rounded-full align-top'} src={src} alt="profil" />
  )
}
