import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Button} from '../../molecules/Button';
import {Icon} from '../../molecules/Icon';
import {Text} from '../../molecules/Text';

const Container = styled.div`
  display: grid;
  grid-template-columns: 64px 64px 64px;
  grid-gap: 16px;
  justify-content: space-evenly;
`;

const pads = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '#', '0', '*'];

export const Dialpad = ({size, spacing}) => {
  return (
    <Container spacing={spacing}>
      {pads.map((pad) => React.cloneElement((
        <Button circle>
          <Text size={size}>{pad}</Text>
        </Button>
      ), {key: pad}))}
      <Button background='green' style={{gridColumnStart: 2}} circle>
        <Icon iconName="mdiPhone" color="#fff" size={1.3}/>
      </Button>
    </Container>
  );
};

Dialpad.propTypes = {
  size: PropTypes.string,
  spacing: PropTypes.string,
};
