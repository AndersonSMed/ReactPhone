import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import theme from '../theme';
import {Dialer} from '../pages/Dialer';
import './index.css';

const Container = styled.div`
  background: ${({theme}) => theme.colors.background};
  width: 350px;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Dialer />
    </Container>
  </ThemeProvider>
);

export default App;
