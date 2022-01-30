import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardCat = ({ cat }) => {
  return (
    <Card>
      <Image src={cat.url} alt={cat.name} />
      <Overlay>
        <Header>
          <SvgArc xmlns="http://www.w3.org/2000/svg">
            <path />
          </SvgArc>
          <Row>
            <Link to={`/cat/${cat.id}`}>{cat.name}</Link>
            <CardLink href={cat.wikipedia_url}>Wikipedia</CardLink>
            <TagLine>{cat.description}</TagLine>
          </Row>
        </Header>
      </Overlay>
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

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SvgArc = styled.svg`
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 100%;
  right: 0;
  z-index: 1;

  & > path {
    fill: #fff;
    d: path('M 40 80 c 22 0 40 -22 40 -40 v 40 Z');
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  border-radius: calc(40 * 1px);
  background-color: #fff;
  transform: translateY(100%);
  transition: 0.2s ease-in-out;

  .card:hover .card__overlay {
    transform: translateY(0);
  }
`;

const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 2em;
  border-radius: calc(40 * 1px) 0 0 0;
  background-color: #fff;
  transform: translateY(-50%);
  transition: 0.2s ease-in-out;
`;

const CardLink = styled.a`
  font-size: 1em;
  margin: 0 0 0.3em;
  color: #6a515e;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const TagLine = styled.div`
  display: block;
  margin: 1em 0;
  font-family: 'MockFlowFont';
  font-size: 0.8em;
  color: #d7bdca;
`;

const Card = styled.div`
  position: relative;
  display: block;
  cursor: pointer;
  height: 100%;
  border-radius: calc(40 * 1px);
  overflow: hidden;
  text-decoration: none;

  &:hover ${Header} {
    transform: translateY(-100%);
  }
`;

export default CardCat;
