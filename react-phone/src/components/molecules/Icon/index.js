import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MaterialIcon from '@mdi/react';

const StyledIcon = styled(MaterialIcon)`
  color: ${({color}) => color ? color : 'unset' };
`;

const getIconPath = (iconName) => {
  const paths = require('@mdi/js');
  return paths[iconName];
};

export const Icon = ({iconName, color, size}) => {
  const path = getIconPath(iconName);
  return (<StyledIcon path={path} size={size || 1} color={color} />);
};

Icon.propTypes = {
  iconName: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
};
