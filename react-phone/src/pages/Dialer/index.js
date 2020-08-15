import React from 'react';
import styled from 'styled-components';
import {Dialpad} from '../../components/organisms/Dialpad';
import {Input} from '../../components/molecules/Input';
import {Divider} from '../../components/molecules/Divider';

const Container = styled.div`
  padding: 16px;
`;

export const Dialer = () => (
  <Container>
    <Input fontSize="24px" width="100%" centered uppercase rounded />
    <Divider />
    <Dialpad fontSize="24px" spacing="8px" />
  </Container>
);
