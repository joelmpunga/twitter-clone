import React from 'react'
import Wrapper from './Wrapper'
import SideBare from './SideBare'
import ContainerTrend from './ContainerTrend'
import FollowAcount from './FollowAcount'
import Trends from './Trends'
export default function Root({children}) {
  return (
    <div className='flex'>
      <SideBare />
      {
        children
      }
      <Trends />
    </div>
  )
}
