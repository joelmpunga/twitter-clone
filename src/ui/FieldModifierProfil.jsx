import { useState } from 'react'

export default function FieldModifierProfil({ isTextArea = false,labelText,name,valeur}) {
    const [fieldValue,setFieldValue]=useState(valeur)
    const classField="w-full bg-black text-white outline-none resize-none px-2 py-2"
    const handleChange = (e) =>{
        setFieldValue(e.target.value)
    }
    console.log(fieldValue);
    return (
        <div className='border border-gray-500 rounded-lg px-2 m-5'>
            <label htmlFor="" className='px-1 py-2 text-gray-400'>{labelText}</label>
            {
                isTextArea ? <textarea id='' name={name} value={fieldValue}  className={classField} onChange={(e) =>{setFieldValue(e.target.value)}}></textarea> : <input name={name} value={fieldValue} type="text" className={classField} onChange={(e) =>{setFieldValue(e.target.value)}}/>
            }
        </div >
    )
}
