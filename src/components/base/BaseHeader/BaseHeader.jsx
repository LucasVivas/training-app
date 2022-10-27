import React from 'react';
import './BaseHeader.css';

function BaseHeader() {
  return (
    <div className="BaseHeader" data-testid="BaseHeader">
      <h1>Training App</h1>
    </div>
  );
}

BaseHeader.propTypes = {};

BaseHeader.defaultProps = {};

export default BaseHeader;
