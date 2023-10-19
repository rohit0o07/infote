import React from 'react'
import image from '../Components/images/Hcc352a8fada74e9e95f571e1e9ca606dC-removebg-preview.png'

function Header() {
  return (
    <div className='main-Header'>
    <div className='main-Header-left'>
    <img src={image}alt="logo" width={150} height={150}/>
    </div>
    <div className='main-Header-right'>
    <ul>
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li>Blogs</li>
    <li>Case Studies</li>
    <li>Contact</li>
    </ul>
    </div>
    </div>
  )
}

export default Header