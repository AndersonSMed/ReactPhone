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
    <Input size="md" width="100%" centered uppercase />
    <Divider />
    <Dialpad size="md" />
  </Container>
);
