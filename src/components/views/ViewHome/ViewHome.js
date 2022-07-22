import React from "react";
import PropTypes from "prop-types";
import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout";

const ViewHome = () => (
  <>
    <DefaultLayout>
      <DefaultLayout.Header>Header</DefaultLayout.Header>
      <DefaultLayout.Main>Main</DefaultLayout.Main>
      <DefaultLayout.Footer>Footer</DefaultLayout.Footer>
    </DefaultLayout>
  </>
);

ViewHome.propTypes = {};

ViewHome.defaultProps = {};

export default ViewHome;