import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  all: unset;
  min-width: 64px;
  min-height: 64px;
  color: #616161;
  background: ${({background}) => background ? background : '#f5f5f5'};
  border-radius: ${({circle}) => circle ? '50%' : '2px'};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: 1px 1px 2px 1px #616161;
  }

  &:active {
    box-shadow: unset;
  }
`;

export const Button = ({children, background, circle, onClick}) => {
  return (
    <StyledButton onClick={onClick} background={background} circle={circle}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.element.isRequired,
  background: PropTypes.string,
  circle: PropTypes.bool,
  onClick: PropTypes.func,
};
