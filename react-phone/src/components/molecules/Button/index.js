import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  all: unset;
  min-width: 64px;
  min-height: 64px;
  color: #424242;
  background: ${({background}) => background ? background : '#e0e0e0'};
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

export const Button = ({children, background, circle, ...props}) => (
  <StyledButton background={background} circle={circle} {...props}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  background: PropTypes.string,
  circle: PropTypes.bool,
};
