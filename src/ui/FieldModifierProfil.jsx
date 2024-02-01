import { useState } from 'react'

export default function FieldModifierProfil({ isTextArea = false,labelText,name,valeur}) {
    const [fieldValue,setFieldValue]=useState(valeur)
    const classField="w-full bg-black text-white outline-none resize-none px-2 py-2"
    const handleChange = (e) =>{
        const currentValue = e.target.value
        setFieldValue(currentValue)
    }
    return (
        <div className='border border-gray-500 rounded-lg px-2 m-5'>
            <label htmlFor="" className='px-1 py-2 text-gray-400'>{labelText}</label>
            {
                isTextArea ? <textarea id='' name={name} value={valeur}  className={classField} onChange={handleChange}></textarea> : <input name={name} value={valeur} type="text" className={classField} onChange={handleChange}/>
            }
        </div >
    )
}
