import React from 'react';
import styled from 'styled-components';

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  align-items: ${(props) => props.items || 'flex-start'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  max-width: 800px;
  margin: ${(props) => props.margin || 'auto'};
`;

const $Flex = (props) => {
  return <StyledFlex {...props} />;
};

export { $Flex };
