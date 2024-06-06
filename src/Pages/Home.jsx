import React from 'react'
import { NavbarWithMegaMenu } from '../Components/Navbar'
import Banner from '../Components/Banner'

const Home = () => {
  return (
    <div className='pt-5'>
        <NavbarWithMegaMenu />
        <Banner />
    </div>
  )
}

export default Home