import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Title } from 'components/styled';

const CardCat = ({ cat }) => {
  return (
    <Card>
      <CardLink href={cat.wikipedia_url}>Wikipedia</CardLink>
      <Title size={12}>{cat.description}</Title>
      <TextUnderline>
        <Link to={`/cat/${cat.id}`}>{cat.name}</Link>
      </TextUnderline>
    </Card>
  );
};

CardCat.propTypes = {
  cat: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    url: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    wikipedia_url: PropTypes.string,
  }),
};

const CardLink = styled.a`
  font-size: 16px;
  margin: 0 0 5px;
  color: #6a515e;
  text-decoration: underline;
`;

const TextUnderline = styled.span`
  border-bottom: solid blue 1px;

  ${CardLink}
`

const Card = styled.div`
  padding: 20px;
`;

export default CardCat;
