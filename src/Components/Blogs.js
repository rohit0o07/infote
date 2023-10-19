import React from 'react'
import thirtyImage from '../../src/Components/images/digital-marketing-4111002_1920-min-4292146644-removebg-preview (1).png'
import thirtyOneImage from '../../src/Components/images/th-3645028878-removebg-preview (1).png';
import thirtyTwoImage from '../../src/Components/images/digital-marketing-training-in-bangalore-2906563667-removebg-preview.png'

function Blogs() {
  return (
    <div className='Blogs'>
    <h2>CASE STUDIES</h2>
        <div className='blog1'>
        <li>
        <img src={thirtyImage} alt="blogImages" width={400} height={400}/>
        <h2>Digital Marketing</h2>
        <br/>
        <h3>Top 4 Most effective Digital <br/> Marketing strategies</h3>
        </li>
        <li margin-top={-10}>
        <img src={thirtyOneImage} alt="blogImages" width={400} height={400}/>
        <h2>Channels</h2>
        <br/>
        <h3>what are the Digital Marketing <br/>Channels</h3>
        </li>
        <li margin-top={50}>
        <img src={thirtyTwoImage} alt="blogImages" width={400} height={400}/>
        <br/>
        <h3>Difference between  Website <br/> Web application and Mobile <br/>application?</h3>
        </li>
        </div>
        <button>View More </button>
    </div>
  )
}

export default Blogs