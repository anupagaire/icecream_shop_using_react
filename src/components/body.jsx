 import React from 'react';
import '../css/style.css';
import gelato from '../images/gelato.png';
import icecream from '../images/ice.png'; 

import popsicle from '../images/popsicle.png';
import rolledIcecream from '../images/rolled_icecream.png';

const Body = () => (
      <div className="body">
           
          <div>
            <img src={icecream} className='body_image' alt="Icecream" />
            <p>ICECREAM</p>
          </div>
          <div>
            <img src={popsicle} className='body_image' alt="Popsicle" />
            <p>POPSICLE</p>
          </div>
          <div>
            <img src={gelato} className='body_image' alt="Gelato" />
            <p>GELATO</p>
          </div>
          <div>
            <img src={rolledIcecream} className='body_image' alt="Rolled Icecream" />
            <p>ROLLED ICECREAM</p>
          </div>
        </div>
    );
    export default Body;