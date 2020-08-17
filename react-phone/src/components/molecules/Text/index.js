import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {getFontSize} from '../../../constants';

const StyledText = styled.span`
  color: ${({color}) => color || '#424242'};
  font-size: ${({size}) => getFontSize(size)};
`;

export const Text = ({size, color, children, ...props}) => (
  <StyledText size={size} color={color} {...props}>
    {children}
  </StyledText>
);

Text.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.string,
};
