import React, { useState } from 'react';
import { fetchBreedCat, fetchBreedSearch } from 'api/cat-breeds';
import { Flex, Title, Grid } from 'components/styled';
import CatsFilters from 'components/cats/cats-filters';
import CatCard from 'components/cats/cat-card';

const CatsContent = () => {
  const [items, setItems] = useState([]);
  const [disabled, setDisabled] = useState(true);

  const toggleDisabled = (disabled) => {
    setDisabled(disabled);
  };

  const fetchCats = async (params = {}) => {
    try {
      toggleDisabled(true);
      const fetch = params.breed_id ? fetchBreedSearch : fetchBreedCat;
      const result = await fetch(params);
      setItems(result);
      toggleDisabled(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Title size={42}>Welcome to Cats API</Title>
      <Flex items={'center'} direction={'column'}>
        <Flex margin={'20px'}>
          <CatsFilters changeFilters={fetchCats} disabled={disabled} />
        </Flex>
        Found {items.length}
        <Grid columns={'1fr 1fr'} gap={20}>
          {items.map((item) => {
            return <CatCard key={item.id} cat={item} />;
          })}
        </Grid>
      </Flex>
    </div>
  );
};

export default CatsContent;
