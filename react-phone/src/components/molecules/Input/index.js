import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {getFontSize} from '../../../constants';

const StyledInput = styled.input`
  all: unset;
  background: #e0e0e0;
  color: #424242;
  padding: 8px 16px;
  box-sizing: border-box;
  border-radius: 4px;
  width: ${({width}) => width || 'unset'};
  text-align: ${({centered}) => centered ? 'center' : 'unset'};
  text-transform: ${({uppercase}) => uppercase ? 'uppercase' : 'unset'};
  font-size: ${({size}) => getFontSize(size)};
`;

export const Input = ({
  centered,
  uppercase,
  width,
  size,
  ...props
}) => (
  <StyledInput
    type="text"
    centered={centered}
    uppercase={uppercase}
    width={width}
    size={size}
    {...props}
  />
);

Input.propTypes = {
  centered: PropTypes.bool,
  uppercase: PropTypes.bool,
  width: PropTypes.string,
  size: PropTypes.string,
};
