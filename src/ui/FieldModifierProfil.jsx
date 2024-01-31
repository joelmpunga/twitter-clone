import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { modifyName, modifyEmail, modifyUserName } from '../features/profil/profilSlice'


export default function FieldModifierProfil({ isTextArea = false,labelText,name}) {
    const profil = useSelector((state) => state.profil.value)
    const dispatch = useDispatch()
    const classField="w-full bg-black text-white outline-none resize-none px-2 py-2"
    {console.log(profil)}
    return (
        <div className='border border-gray-500 rounded-lg px-2 m-5' onClick=''>
            <label htmlFor="" className='px-1 py-2 text-gray-400'>{labelText}</label>
            {
                isTextArea ? <textarea id='' name={name}  className={classField} onChange={() => dispatch(modifyName("Jomaia"))}></textarea> : <input name={name} type="text" className={classField} onChange={() => dispatch(modifyName())}/>
            }
        </div >
    )
}
