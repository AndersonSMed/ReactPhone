import styled from 'styled-components';

export const Divider = styled.div`
  height: ${({size, theme}) => theme.sizes[size] || theme.sizes.sm};
  width: 100%;
`;
