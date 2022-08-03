import React from "react";
import "./BaseMain.css";

const BaseMain = () => (
  <div className="BaseMain" data-testid="BaseMain">
    <h1>Exercices</h1>
    <ul>
      <div>
        <li>Hip Trust</li>
      </div>
      <li>Plank</li>
    </ul>
  </div>
);

BaseMain.propTypes = {};

BaseMain.defaultProps = {};

export default BaseMain;
