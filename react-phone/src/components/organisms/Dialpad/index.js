import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Button} from '../../molecules/Button';
import {Icon} from '../../molecules/Icon';

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 4px 12px;
  box-sizing: border-box;
`;

const Container = styled.div`
  font-size: ${({fontSize}) => fontSize || '1em'};

  & > ${Row}:not(:last-child) {
    margin-bottom: ${({spacing}) => spacing || 'unset'};
  };
`;

export const Dialpad = ({fontSize, spacing}) => {
  return (
    <Container fontSize={fontSize} spacing={spacing}>
      <Row>
        <Button circle>1</Button>
        <Button circle>2</Button>
        <Button circle>3</Button>
      </Row>
      <Row>
        <Button circle>4</Button>
        <Button circle>5</Button>
        <Button circle>6</Button>
      </Row>
      <Row>
        <Button circle>7</Button>
        <Button circle>8</Button>
        <Button circle>9</Button>
      </Row>
      <Row>
        <Button circle>*</Button>
        <Button circle>0</Button>
        <Button circle>#</Button>
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
  fontSize: PropTypes.string,
  spacing: PropTypes.string,
};