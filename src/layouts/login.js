import React from 'react';
import Login from '../components/login';
import {Box, Page} from 'react-layout-components';

export default () => (
  <Page>
    <Box alignItems="center" height="90%" justifyContent="center">
      <Login title="Lab.coop" subtitle="Please log in" />
    </Box>
  </Page>
);
