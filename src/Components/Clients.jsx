import React from 'react'
import '../styles/Clients.css'
import img1 from '../assets/clients/1.png'
import img2 from '../assets/clients/2.png'
import img3 from '../assets/clients/3.png'
import img4 from '../assets/clients/4.png'

const Clients = () => {
  return (
    <div className='pt-10'>
        <div className="container">
            <div className="clients-section">
            <h2 className="font-bold" style={{ fontSize: '2rem' }}>
                Our Clients
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 justify-center items-center">
                <img src={img1} alt="client" />
                <img src={img2} alt="client" />
                <img src={img3} alt="client" />
                <img src={img4} alt="client" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Clients