import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Button} from '../../molecules/Button';
import {Icon} from '../../molecules/Icon';
import {Text} from '../../molecules/Text';

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  box-sizing: border-box;
`;

const Container = styled.div`
  & > ${Row}:not(:last-child) {
    margin-bottom: ${({spacing}) => spacing || 'unset'};
  };
`;

export const Dialpad = ({size, spacing}) => {
  return (
    <Container spacing={spacing}>
      <Row>
        <Button circle>
          <Text size={size}>1</Text>
        </Button>
        <Button circle>
          <Text size={size}>2</Text>
        </Button>
        <Button circle>
          <Text size={size}>3</Text>
        </Button>
      </Row>
      <Row>
        <Button circle>
          <Text size={size}>4</Text>
        </Button>
        <Button circle>
          <Text size={size}>5</Text>
        </Button>
        <Button circle>
          <Text size={size}>6</Text>
        </Button>
      </Row>
      <Row>
        <Button circle>
          <Text size={size}>7</Text>
        </Button>
        <Button circle>
          <Text size={size}>8</Text>
        </Button>
        <Button circle>
          <Text size={size}>9</Text>
        </Button>
      </Row>
      <Row>
        <Button circle>
          <Text size={size}>*</Text>
        </Button>
        <Button circle>
          <Text size={size}>0</Text>
        </Button>
        <Button circle>
          <Text size={size}>#</Text>
        </Button>
      </Row>
      <Row>
        <Button background="#7acc8f" circle>
          <Icon iconName="mdiPhone" color="#fff" size={1.3}/>
        </Button>
      </Row>
    </Container>
  );
};

Dialpad.propTypes = {
  size: PropTypes.string,
  spacing: PropTypes.string,
};
