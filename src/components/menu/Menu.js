import React from 'react';

//styling
import './Menu.css';

// images
import skull from '../../images/skull.png'

const fiveArr = Array.from(Array(7).keys());

const Menu = () => {
  return (
    <div className="Menu cfb">
      {fiveArr.map((s, i)=> <img key={i} className="skull-img" src={skull} alt="skull"/>)}
      <h1>BADASS TO DO LIST</h1>
      {fiveArr.map((s, i)=> <img key={i+7} className="skull-img" src={skull} alt="skull"/>)}

    </div>
  );
}

export default Menu;
