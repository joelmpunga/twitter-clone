import React from 'react'
import IconSideBar from '../ui/IconSideBar'
import ButtonArrounded from '../ui/ButtonArrounded'

export default function Menu() {
    return (
        <div className='flex justify-end gap-0 w-1/3'>
            <div className='flex gap-0 justify-start w-1/2 flex-col'>
                <IconSideBar icone="src/assets/Gif.svg" onglet="" />
                <IconSideBar icone="src/assets/Gif.svg" onglet="Home" />
                <IconSideBar icone="src/assets/Gif.svg" onglet="Explore" />
                <IconSideBar icone="src/assets/Gif.svg" onglet="Notifications" />
                <IconSideBar icone="src/assets/Gif.svg" onglet="Messages" />
                <IconSideBar icone="src/assets/Gif.svg" onglet="Bookmarks" />
                <IconSideBar icone="src/assets/Gif.svg" onglet="Lists" />
                <IconSideBar icone="src/assets/Gif.svg" onglet="Profile" />
                <IconSideBar icone="src/assets/Gif.svg" onglet="More" />
                <ButtonArrounded texte="Tweet" color="text-white bg-blue-500 my-4" taille="h-10 w-40"/>
            </div>
        </div>
    )
}
