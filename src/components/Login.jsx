import React from 'react'
import ButtonArrounded from '../ui/ButtonArrounded'
import FieldModifierProfil from '../ui/FieldModifierProfil'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='mt-[10%] w-[50%] py-10 h-full mx-auto m-auto flex gap-10 justify-center border border-blue-300 rounded-2xl '>
      <img src="src/assets/Twitter-blue.svg" alt='' width={300} height={300} />
      <div className='text-white'>
        <h1 className='text-2xl ml-4 m-auto w-full'>Connectez-vous à Twitter</h1>
        <form action='http://localhost:3000/users/login' method='post'>
          <div className="">
            <FieldModifierProfil isTextArea={false} labelText="Username" name="username" valeur="" bordercol='border-blue-400' />
            <FieldModifierProfil isTextArea={false} labelText="Password" name="password" valeur="" bordercol='border-blue-400' />
          </div>
          <ButtonArrounded texte="Se connecter" color="bg-blue-500 text-white font-bold" taille="w-40 h-10 ml-[30%] my-2" type="submit" />
        </form>
        <h2 className='m-8'><span>Vous n'avez pas de compte?</span><Link className='text-blue-400' to=''> Inscrivez-vous!</Link></h2>
      </div>
    </div>
  )
}
