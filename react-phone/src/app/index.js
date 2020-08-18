import React from 'react';
import styled from 'styled-components';
import {OnCall} from '../pages/OnCall';
import './index.css';

const Container = styled.div`
  background: #fefefe;
  width: 350px;
`;

const App = () => (
  <Container>
    <OnCall />
  </Container>
);

export default App;
