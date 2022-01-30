import React from 'react';
import styled from 'styled-components';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns || '1fr'};
  gap: ${(props) => props.gap ? props.gap + 'px' : '10px'};
  padding: ${(props) => props.padding ? props.padding + 'px' : '0px'};;
`;

const Grid = (props) => {
  return <StyledGrid {...props} />;
};

export { Grid };
