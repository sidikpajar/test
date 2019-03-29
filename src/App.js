import React, { Fragment } from 'react';
import ProfilePages from './components/pages/ProfilePages';
import PendidikanPages from './components/pages/PendidikanPages';
import InformasiPages from './components/pages/InformasiPages';
import GridOrganism from './components/organism/GridOrganism';

const App = () => (
  <Fragment>
    <ProfilePages />
    <PendidikanPages />
    <InformasiPages />
    <GridOrganism />
  </Fragment>
);

export default App;
