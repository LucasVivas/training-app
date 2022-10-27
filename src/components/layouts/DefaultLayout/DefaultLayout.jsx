import React from 'react';
import PropTypes from 'prop-types';
import './DefaultLayout.css';
import BaseHeader from '../../base/BaseHeader/BaseHeader';
import BaseMain from '../../base/BaseMain/BaseMain';
import BaseFooter from '../../base/BaseFooter/BaseFooter';

function DefaultLayout({ children }) {
  const header = children.find((child) => child.type === DefaultLayout.Header)
    ?.props.children;
  const main = children.find((child) => child.type === DefaultLayout.Main)
    ?.props.children;
  const footer = children.find((child) => child.type === DefaultLayout.Footer)
    ?.props.children;

  return (
    <>
      {header && <BaseHeader> {header} </BaseHeader>}
      {main && <BaseMain> {main} </BaseMain>}
      {footer && <BaseFooter>{footer} </BaseFooter>}
    </>
  );
}

DefaultLayout.Header = function () {
  return null;
};
DefaultLayout.Main = function () {
  return null;
};
DefaultLayout.Footer = function () {
  return null;
};

DefaultLayout.propTypes = {
  children: PropTypes.node
};

DefaultLayout.defaultProps = {
  children: null
};

DefaultLayout.defaultProps = {};

export default DefaultLayout;
