import React from 'react'

export default function FieldModifierProfil({ isTextArea = false,labelText,name}) {
    const classField="w-full bg-black text-white outline-none resize-none px-2 py-2"
    return (
        <div className='border border-gray-500 rounded-lg px-2 m-5' onClick=''>
            <label htmlFor="" className='px-1 py-2 text-gray-400'>{labelText}</label>
            {
                isTextArea ? <textarea id='' name={name}  className={classField} ></textarea> : <input name={name} type="text" className={classField} />
            }
        </div >
    )
}
