import React from "react";
import PropTypes from "prop-types";
import "./DefaultLayout.css";
import BaseHeader from "../../base/BaseHeader/BaseHeader";
import BaseMain from "../../base/BaseMain/BaseMain";
import BaseFooter from "../../base/BaseFooter/BaseFooter";

const DefaultLayout = ({ children }) => {
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
};

DefaultLayout.Header = () => null;
DefaultLayout.Main = () => null;
DefaultLayout.Footer = () => null;

DefaultLayout.propTypes = {};

DefaultLayout.defaultProps = {};

export default DefaultLayout;
