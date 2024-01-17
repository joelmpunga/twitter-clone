import React from 'react'
import IconSideBar from '../ui/IconSideBar'
import ButtonArrounded from '../ui/ButtonArrounded'
import ImageSmallArrounded from '../ui/ImageSmallArrounded'
import Title from '../ui/Title'
import IconNewTweet from '../ui/IconNewTweet'

export default function Menu() {
    return (
        <div className='flex justify-end gap-0 w-1/3'>
            <div className='flex gap-0 justify-start w-1/2 flex-col'>
                <IconSideBar icone="src/assets/Twitter.svg" onglet="" />
                <IconSideBar icone="src/assets/Home-Fill.svg" onglet="Home" />
                <IconSideBar icone="src/assets/Explore.svg" onglet="Explore" />
                <IconSideBar icone="src/assets/Notifications.svg" onglet="Notifications" />
                <IconSideBar icone="src/assets/Messages.svg" onglet="Messages" />
                <IconSideBar icone="src/assets/Bookmarks.svg" onglet="Bookmarks" />
                <IconSideBar icone="src/assets/Lists.svg" onglet="Lists" />
                <IconSideBar icone="src/assets/Profile.svg" onglet="Profile" />
                <IconSideBar icone="src/assets/More.svg" onglet="More" />
                <ButtonArrounded texte="Tweet" color="text-white bg-blue-500 my-4" taille="h-10 w-40" />
                <div className='my-60 flex align-middle gap-4'>
                    <ImageSmallArrounded src="src/assets/Profile-Photo.svg" classe="h-30 w-30" />
                    <div>
                        <Title content="Joel MPUNGA" classe="text-white font-bold"/>
                        <Title content="@JoelMPUNGA56789" classe="text-white font-bold"/>                        
                    </div>
                    <IconNewTweet icone="src/assets/More-2.svg"/>
                </div>
            </div>
        </div>
    )
}
