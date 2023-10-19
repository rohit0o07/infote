import React from 'react';
import { Button } from '@mui/material';
import '../App.css';
import firstImage from '../../src/Components/images/pexels-cottonbro-studio-4489749.jpg';
import secondImage from '../../src/Components/images/pexels-bella-zhong-3579538.jpg';
import thirdImage from '../../src/Components/images/pexels-chevanon-photography-1108101.jpg';
import fourthImage from '../../src/Components/images/pexels-cottonbro-studio-4489749.jpg';
import fifthImage from '../../src/Components/images/pexels-kateryna-babaieva-3361230.jpg';
import sixthImage from '../../src/Components/images/pexels-pixabay-73833.jpg';
import seventhImage from '../../src/Components/images/pexels-pixabay-247512.jpg';
import eightImage from '../../src/Components/images/pexels-quintin-gellar-313776.jpg';

function Images() {
  return (
    <div className="main-images">
    <div className="task">
        <div className="myCard">
          <div className="innerCard">
            <div className="frontSide">
            <ul>
            <li><img src={firstImage} className="title" alt="images" /></li>
            <li><img src={secondImage} className="title" alt="images" /></li>
            <li><img src={thirdImage} className="title" alt="images" /></li>
            <li><img src={fourthImage} className="title" alt="images" border-left={20} /></li>
            </ul> 
            </div>
            <div class="backSide">
            <ul>
            <li><img src={fifthImage} className="title" alt="images" /></li>
            <li><img src={sixthImage} className="title" alt="images" /></li>
            <li><img src={seventhImage} className="title" alt="images" /></li>
            <li><img src={eightImage} className="title" alt="images"  border-left={20}/></li>
            </ul>
            </div>
          </div>
          <br/>
        <div className="innerCard1">
            <div className="frontSide">
            <ul>
            <li><img src={fifthImage} className="title" alt="images" /></li>
            <li><img src={sixthImage} className="title" alt="images" /></li>
            <li><img src={seventhImage} className="title" alt="images" /></li>
            <li><img src={eightImage} className="title" alt="images"  border-left={20}/></li>
            </ul>
            </div>
            <div class="backSide">
            <ul>
            <li><img src={firstImage} className="title" alt="images" /></li>
            <li><img src={secondImage} className="title" alt="images" /></li>
            <li><img src={thirdImage} className="title" alt="images" /></li>
            <li><img src={fourthImage} className="title" alt="images" border-left={20} /></li>
            </ul> 
            </div>
          </div>
        </div>
      </div>
      <div className="main-sub-content">
        <h2>
          In Today's <br /> competitive <br />
          landscape <br />
          grow your business <span>Faster</span>
        </h2>
        <br />
        <Button variant="contained" disableElevation>
          Reach out
        </Button>
      </div>
    </div>
  );
}

export default Images;