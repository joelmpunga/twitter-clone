import { useState, useCallback, useEffect } from 'react'
import ImageSmallArrounded from '../ui/ImageSmallArrounded'
import { Link } from 'react-router-dom'
import ButtonArrounded from '../ui/ButtonArrounded'
import FieldModifierProfil from '../ui/FieldModifierProfil'
import axios from 'axios'

export default function ModifierProfil() {
    const [user, setUser] = useState([])
    useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/amare53/twiterdb/users/2`)
            .then(res => {
                setUser(res.data);
            })
    }, ['user'])
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        let data = new FormData(form)
        let objectUser = Object.fromEntries(data)
        setUser(objectUser)
    }
    return (
        <div className='border border-gray-600 text-white' >
            <form onSubmit={handleSubmit}>
                <ButtonArrounded texte="Sauvegarder" color="bg-white text-black font-bold" taille="w-40 h-10 ml-[60%] my-2" type="submit" />
                <img src="https://picsum.photos/2048/1024?random=1313494418314457090" alt="" className='w-full h-60' />
                <div className='-mt-20 mx-4 flex justify-between'>
                    <ImageSmallArrounded src="https://picsum.photos/200?random=1548956601000" classe="h-40 w-40 border" />
                </div>
                <div className='w-full px-4 py-5'>
                    <FieldModifierProfil isTextArea={false} labelText="Nom" valeur={user.name} name="name" />
                    <FieldModifierProfil isTextArea={true} labelText="Username" valeur={user.username} name="username" />
                    <FieldModifierProfil isTextArea={false} labelText="Email" valeur={user.email} name="email" />
                    <FieldModifierProfil isTextArea={false} labelText="Site web" name="site" />
                    <input type="hidden" name="profil" value={user.profil} />
                    <input type="hidden" name="id" value={user.id} />
                    <input type="hidden" name="profil" value={user.profil} />
                    <input type="hidden" name="thumbnailProfil" value={user.thumbnailProfil} />
                    <input type="hidden" name="Joined" value={user.Joined} />
                </div>
            </form>
        </div>
    )
}
