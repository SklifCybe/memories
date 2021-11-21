import React, { FC, ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Auth } from './components/Auth';

const App: FC = (): ReactElement => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Container>
  );
};

export { App };
