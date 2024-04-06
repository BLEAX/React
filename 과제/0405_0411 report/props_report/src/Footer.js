import React from "react";

function Footer(props) {
  return (
    <div id='contact_us'>
      <hr />
      <h5>CONTACT US</h5>
      <h6>{props.email}</h6>
    </div>
  );
}

export default Footer;
