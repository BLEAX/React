import React from "react";
import "./menu.css";

function Menu(props) {
  const { name1, name2, name3, name4 } = props;

  return (
    <div className='header'>
      <div>
        <button className='button'>{name1}</button>
        <button className='button'>{name2}</button>
        <button className='button'>{name3}</button>
        <button className='button'>{name4}</button>
      </div>
    </div>
  );
}

export default Menu;
