import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  all: unset;
  background: #e0e0e0;
  color: #424242;
  padding: 8px 16px;
  box-sizing: border-box;
  border-radius: ${({rounded}) => rounded ? '4px' : 'unset'};
  width: ${({width}) => width || 'unset'};
  text-align: ${({centered}) => centered ? 'center' : 'unset'};
  text-transform: ${({uppercase}) => uppercase ? 'uppercase' : 'unset'};
  font-size: ${({fontSize}) => fontSize || '1em'};
`;

export const Input = ({
  centered,
  uppercase,
  rounded,
  width,
  fontSize,
  ...props
}) => (
  <StyledInput
    type="text"
    centered={centered}
    uppercase={uppercase}
    rounded={rounded}
    width={width}
    fontSize={fontSize}
    {...props}
  />
);

Input.propTypes = {
  centered: PropTypes.bool,
  uppercase: PropTypes.bool,
  rounded: PropTypes.bool,
  width: PropTypes.string,
  fontSize: PropTypes.string,
};
