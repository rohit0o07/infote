import React from 'react'
import '../App.css'
import { Button } from '@mui/material'

function Services() {
  return (
    <div className='Services'>
    <h2>SERVICES</h2>
    <div className='Services-left'>
    <h2>DIGITAL MARKETING</h2>
    <br/>
    <h3>SEO(Search engine Optimization)</h3>
    <br/>
    <h3>Google Ads</h3>
    <br/>
    <h3>LinkedinAds</h3>
    <br/>
    <h3>Facebook Meta Ads</h3>
    </div>
    <div className='Services-right'>
    <h2>IT SOLUTIONS</h2>
    <br/>
    <h3>Content Marketing </h3>
    <br/>
    <h3>Microsoft Ads Network</h3>
    <br/>
    <h3>Analytics and Reporting </h3>
    <br/>
    <h3>Creative and Messaging </h3>
    </div>
    <br/> 
    <Button variant="contained" disableElevation>
    Know More
  </Button>
    </div>
  )
}

export default Services