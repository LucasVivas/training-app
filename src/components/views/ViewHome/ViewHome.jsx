import React from 'react';
import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout';

function ViewHome() {
  return (
    <DefaultLayout>
      <DefaultLayout.Header>Header</DefaultLayout.Header>
      <DefaultLayout.Main>Main</DefaultLayout.Main>
      <DefaultLayout.Footer>Footer</DefaultLayout.Footer>
    </DefaultLayout>
  );
}

ViewHome.propTypes = {};

ViewHome.defaultProps = {};

export default ViewHome;
