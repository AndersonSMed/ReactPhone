import React from 'react';
import styled from 'styled-components';
import {Button} from '../../molecules/Button';
import {Icon} from '../../molecules/Icon';

const Container = styled.div`
  height: 400px;
  position: relative;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 4px 12px;
  box-sizing: border-box;

  &:last-of-type {
    position: absolute;
    bottom: 0px;
  }
`;

export const CallActions = () => (
  <Container>
    <Row>
      <Button circle>
        <Icon iconName="mdiMicrophoneOff" size={1.3}/>
      </Button>
      <Button circle>
        <Icon iconName="mdiDialpad" size={1.3}/>
      </Button>
      <Button circle>
        <Icon iconName="mdiVolumeOff" size={1.3}/>
      </Button>
    </Row>
    <Row>
      <Button circle background="#ff9ba2">
        <Icon iconName="mdiPhoneOff" color="#fff" size={1.3}/>
      </Button>
    </Row>
  </Container>
);
