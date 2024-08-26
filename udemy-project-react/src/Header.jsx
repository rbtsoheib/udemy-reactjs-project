import React from "react";

function Header(props) {
  return (
    <>
      <h1> hello my name is {props.name} </h1>
      <p> I am a {props.occupation} </p>
    </>
  );
}

export default Header;
