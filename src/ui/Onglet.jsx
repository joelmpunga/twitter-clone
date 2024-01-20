import { useState } from "react";
export default function Onglet({ onglet, active }) {
    return (
        <div className='flex flex-col mt-3 w-1/5 gap-4 text-center hover:bg-slate-900'>
            {
                active ? <><h3 className='text-white font-bold h-auto'>{onglet}</h3><div className='bg-blue-600 rounded-md h-2 w-3/5 ml-7'></div> </> : <h3 className='text-gray-500 h-auto'>{onglet}</h3>
            }
        </div>
    )
}
