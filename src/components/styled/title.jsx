import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-size: ${(props) => (props.size ? props.size + 'px' : '32px')};
  text-align: center;
`;

const Title = (props) => {
  return <StyledTitle {...props} />;
};

export { Title };
