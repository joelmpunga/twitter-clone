import React from 'react'
import IconMenu from '../ui/IconMenu'
import ButtonArrounded from '../ui/ButtonArrounded'
import ImageSmallArrounded from '../ui/ImageSmallArrounded'
import Title from '../ui/Title'
import IconNewTweet from '../ui/IconNewTweet'
import NameAccount from './NameAccount'

export default function Menu() {
    return (
        <div className='flex justify-end gap-0 w-1/3'>
            <div className='flex gap-0 justify-start w-1/2 flex-col'>
                <div className='fixed'>
                    <IconMenu icone="src/assets/Twitter.svg" onglet="" route="/"/>
                    <IconMenu icone="src/assets/Home-Fill.svg" onglet="Home" route="/"/>
                    <IconMenu icone="src/assets/Explore.svg" onglet="Explore" route="/explore"/>
                    <IconMenu icone="src/assets/Notifications.svg" onglet="Notifications" route="/notifications"/>
                    <IconMenu icone="src/assets/Messages.svg" onglet="Messages" route="/messages"/>
                    <IconMenu icone="src/assets/Bookmarks.svg" onglet="Bookmarks" route="/bookmarks" />
                    <IconMenu icone="src/assets/Lists.svg" onglet="Lists" route="/lists"/>
                    <IconMenu icone="src/assets/Profile.svg" onglet="Profile" route="/profil" />
                    <IconMenu icone="src/assets/More.svg" onglet="More" route="/more"/>
                    <ButtonArrounded texte="Tweet" color="text-white bg-blue-500 my-4" taille="h-10 w-40" />
                    <div className='my-60 flex align-middle gap-4'>
                        <ImageSmallArrounded src="src/assets/Profile-Photo.svg" classe="h-30 w-30" />
                        <NameAccount/>
                        <IconNewTweet icone="src/assets/More-2.svg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
