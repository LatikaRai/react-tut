import React from 'react'
import Navbar from './Navbar'
import Center from './Center'

const Section1 = (props) => {
  return (
    <div className='w-full h-screen py-10 px-18'>
      <Navbar/>
      <Center users={props.users}/>
    </div>
  )
}

export default Section1
