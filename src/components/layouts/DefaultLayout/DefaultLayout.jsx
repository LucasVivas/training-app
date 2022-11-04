import React from 'react';
import PropTypes from 'prop-types';
import './DefaultLayout.css';
import BaseHeader from '../../base/BaseHeader';
import BaseMain from '../../base/BaseMain';
import BaseFooter from '../../base/BaseFooter';

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

DefaultLayout.Header = () => 'header';
DefaultLayout.Main = () => 'main';
DefaultLayout.Footer = () => 'footer';

DefaultLayout.propTypes = {
  children: PropTypes.node
};

DefaultLayout.defaultProps = {
  children: null
};

DefaultLayout.defaultProps = {};

export default DefaultLayout;
