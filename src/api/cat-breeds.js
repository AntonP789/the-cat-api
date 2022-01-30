import { getParams } from 'helpers/object-helpers';
const ROUTE = {
  breeds: 'https://api.thecatapi.com/v1/breeds',
  search: 'https://api.thecatapi.com/v1/images/search',
  image: 'https://api.thecatapi.com/v1/images',
};
const HEADERS = { 'X-API-KEY': process.env.REACT_APP_CAT_API_KEY };

const fetchBreedCat = async (breed) => {
  try {
    let result = await fetch(`${ROUTE.breeds}?${getParams(breed)}`, HEADERS);
    result = await result.json();
    return result.map(({ image, name, description, wikipedia_url }) => {
      return {
        id: image?.id || new Date().getTime() + Math.random(),
        url: image?.url,
        name: name,
        description: description,
        wikipedia_url: wikipedia_url,
      };
    });
  } catch (error) {
    console.warn(error);
  }
};

const fetchBreedSearch = async (search) => {
  try {
    let result = await fetch(`${ROUTE.search}?${getParams(search)}`, HEADERS);
    result = await result.json();
    return result.map(({ id, url, breeds }) => {
      breeds =
        Array.isArray(breeds) && typeof breeds[0] === 'object'
          ? breeds.shift()
          : {};
      return {
        id,
        url,
        name: breeds?.name,
        description: breeds?.description,
        wikipedia_url: breeds?.wikipedia_url,
      };
    });
  } catch (error) {
    console.warn(error);
  }
};

const getImageCat = async (id) => {
  try {
    let result = await fetch(`${ROUTE.image}/${id}`, HEADERS);
    result = await result.json();
    return result.url;
  } catch (error) {
    console.warn(error);
  }
}

export { fetchBreedCat, fetchBreedSearch, getImageCat };
