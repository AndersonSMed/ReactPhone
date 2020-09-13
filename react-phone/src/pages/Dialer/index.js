import React, {useState} from 'react';
import styled from 'styled-components';
import {Dialpad} from '../../components/organisms/Dialpad';
import {Input} from '../../components/molecules/Input';
import {Divider} from '../../components/molecules/Divider';

const Container = styled.div`
  padding: 16px;
`;

export const Dialer = () => {
  const [number, setNumber] = useState('');
  const onType = (value) => {
    setNumber((number) => `${number}${value}`);
  };
  const onDial = (event) => {
    event.preventDefault();
  };
  return (
    <Container>
      <Input
        size="md"
        width="100%"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
        centered
        uppercase
      />
      <Divider />
      <Dialpad size="md" onType={onType} onDial={onDial}/>
    </Container>
  );
};
