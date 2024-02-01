import React from 'react'
import IconMenu from '../ui/OneMenu'
import ButtonArrounded from '../ui/ButtonArrounded'
import ImageSmallArrounded from '../ui/ImageSmallArrounded'
import Title from '../ui/Title'
import IconNewTweet from '../ui/IconNewTweet'
import NameAccount from './NameAccount'

export default function SideBare({user}) {
    return (
        <div className='flex justify-end gap-0 w-1/3'>
            <div className='flex gap-0 justify-start w-1/2 flex-col'>
                <div className='fixed flex flex-col h-full justify-between'>
                    <div>
                        <IconMenu icone="src/assets/Twitter.svg" onglet="" route="/" />
                        <IconMenu icone="src/assets/Home-Fill.svg" onglet="Home" route="/" />
                        <IconMenu icone="src/assets/Explore.svg" onglet="Explore" route="/explore" />
                        <IconMenu icone="src/assets/Notifications.svg" onglet="Notifications" route="/notifications" />
                        <IconMenu icone="src/assets/Messages.svg" onglet="Messages" route="/messages" />
                        <IconMenu icone="src/assets/Bookmarks.svg" onglet="Bookmarks" route="/bookmarks" />
                        <IconMenu icone="src/assets/Lists.svg" onglet="Lists" route="/lists" />
                        <IconMenu icone="src/assets/Profile.svg" onglet="Profile" route="/profil" />
                        <IconMenu icone="src/assets/More.svg" onglet="More" route="/more" />
                        <ButtonArrounded texte="Tweet" color="text-white bg-blue-500 my-4" taille="h-10 w-40" />
                    </div>
                    <div className='flex align-bottom gap-4'>
                        <ImageSmallArrounded src={user.profil} classe="h-10 w-10" />
                        <NameAccount user = {user}/>
                        <IconNewTweet icone="src/assets/More-2.svg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
