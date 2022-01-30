import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-size: ${(props) => (props.size ? props.size + 'px' : '32px')};
  color: ${(props) => props.color || 'black'};
  text-align: ${(props) => props.align || 'center'}
`;

const $Title = (props) => {
  return <StyledTitle {...props} />;
};

export { $Title };
