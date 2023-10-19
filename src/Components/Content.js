import React from 'react';
import tenImage from '../../src/Components/images/1-removebg-preview (1).png';
import elevanImage from '../../src/Components/images/The-Enterprises-Logo-768x217-1859573526-removebg-preview (1).png';
import twelveImage from '../../src/Components/images/kakatiya-techno-schools-1495172364-1-1353638686-removebg-preview.png';
import thirteenImage from '../../src/Components/images/th-3244251296-removebg-preview.png';
import fourteenImage from '../../src/Components/images/political_saradhi_logo-removebg-preview.png';
import '../App.css';
import twentyImage from '../../src/Components/images/icons8-edit-property-100.png';
import twentyOneImage from '../../src/Components/images/icons8-attract-customers-100.png';
import twentyTwoImage from '../../src/Components/images/icons8-wallpaper-engine-100.png';
import twentyThreeImage from '../../src/Components/images/icons8-conversion-100.png';

function Content() {
  return (
    <div className="minar-content">
      <div className="minar-card">
        <li>
          <img src={tenImage} alt="minar" />
        </li>
        <li>
          <img src={elevanImage} alt="minar" />
        </li>
        <li>
          <img src={twelveImage} alt="minar" />
        </li>
        <li>
          <img src={thirteenImage} alt="minar" />
        </li>
        <li>
          <img src={fourteenImage} alt="minar" />
        </li>
      </div>
      <div className="minar-text">
        <div className="minar-text-left">
          <h1>
            We Optimize <br />
            your Business
            <br /> with our <br />
            innovative
            <br /> digital <br />
            strategies."
          </h1>
        </div>
        <div className="minar-text-right">
          <li>
            <h3>TRAFFIC</h3>
            <br />
            <img src={twentyThreeImage} alt="icons" className="iconsImage" />
            <br />
            <p>
              "Attracting specific online visitors is vital.
              <br /> we Optimize channels for the right audience"
            </p>
          </li>
          <li margin-right={110}>
            <h3>BRANDING</h3>
            <br />
            <img src={twentyTwoImage} alt="icons" className="iconsImage" />
            <br />
            <p>
              "Create unique identity without
              <br />
              overspending.we design the best <br /> brand image for you"
            </p>
          </li>
        </div>
        <div className="minar-text-right1">
          <li>
            <h3>CONVERSION</h3>
            <br />
            <img src={twentyImage} alt="icons" className="iconsImage" />
            <br />
            <p>
              "High vistiors numbers need effective conversion .Our strategies
              <br />
              enhance conversions,
              <br />
              Saving resources."
            </p>
          </li>
          <li>
            <h3>RETENTION</h3>
            <br />
            <img src={twentyOneImage} alt="icons" className="iconsImage" />
            <br />
            <p>
              "Gaining customers is <br />
              crucial,retaining them is valuable <br />
              we build strong customer loyalty"
            </p>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Content