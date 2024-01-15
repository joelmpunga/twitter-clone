import React from 'react'
import Wrapper from './Wrapper'
import Menu from './Menu'
import ContainerAside from './ContainerAside'
import FollowAcount from './FollowAcount'
import Aside from './Aside'
export default function Root() {
  return (
    <div className='flex'>
      <Menu />
      <Wrapper />
      <Aside/>
    </div>
  )
}
