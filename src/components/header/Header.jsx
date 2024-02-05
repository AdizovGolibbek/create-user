import React from "react";
import "./header.css";

function Header({ userLength }) {
  return (
    <header className="header">
      <div className="container">
        <div className="wrapper">
          <h1>Cuser</h1>
          <h4>{userLength !== 0 ? `You Have: ${userLength}` : "No User"}</h4>
        </div>
      </div>
    </header>
  );
}

export default Header;
