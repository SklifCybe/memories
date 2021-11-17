import React, { FC, ReactElement } from 'react';
import { Container } from '@mui/material';

import { Home } from './components/Home';
import { Navbar } from './components/Navbar';

const App: FC = (): ReactElement => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <Home />
    </Container>
  );
};

export { App };
