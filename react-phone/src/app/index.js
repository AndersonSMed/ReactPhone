import React from 'react';
import styled from 'styled-components';
import {Dialer} from '../pages/Dialer';
import './index.css';

const Container = styled.div`
  background: #fefefe;
  width: 350px;
`;

const App = () => (
  <Container>
    <Dialer />
  </Container>
);

export default App;
