import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { categories, limit } from 'constants/cat';
import BaseSelect from 'components/base/base-select';
import { useSearchParams } from 'react-router-dom';
import { removeEmptyStrKey } from 'helpers/object-helpers';

const initState = () => ({
  breed_id: '',
  limit: 10,
});

const CatsFilters = ({ changeFilters, disabled }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState(initState());

  const changeSelect = (value, key) => {
    const filter = { ...filters, [key]: value };
    setHistory(filter);
  };

  const setHistory = (params) => {
    setSearchParams(removeEmptyStrKey(params));
  };

  useEffect(() => {
    const historyState = Object.fromEntries(searchParams);
    const filter = { ...initState(), ...historyState };
    setFilters(filter);
    changeFilters(filter);
  }, [searchParams]);

  return (
    <Fragment>
      <BaseSelect
        disabled={disabled}
        keyName={'breed_id'}
        items={categories}
        selected={filters.breed_id}
        changeSelect={changeSelect}
      />
      <BaseSelect
        disabled={disabled}
        keyName={'limit'}
        items={limit}
        selected={filters.limit}
        changeSelect={changeSelect}
      />
    </Fragment>
  );
};

CatsFilters.propTypes = {
  disabled: PropTypes.bool,
  changeFilters: PropTypes.func.isRequired,
};

export default CatsFilters;
