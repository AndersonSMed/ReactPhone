import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Divider} from '../../molecules/Divider';
import {Text} from '../../molecules/Text';

const Container = styled.div`
  width: 100%;
  text-align: center;
  padding: 32px 0;
  background: #7acc8f;
`;

export const CallInfo = (props) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((t) => t + 1);
    }, 1000);
    return () => interval();
  }, []);

  return (
    <Container>
      <Text size="lg" color="#ffffff">Mariazinha</Text>
      <Divider />
      <Text size="md" color="#ffffff">+55(84)99999999</Text>
      <Divider />
      <Text size="sm" color="#ffffff">{timer}</Text>
    </Container>
  );
};
