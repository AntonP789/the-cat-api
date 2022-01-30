import React from 'react';
import PropTypes from 'prop-types';
const BaseSelect = ({ items, selected, changeSelect, keyName, disabled }) => {
  const setSelect = ({ target }) => {
    changeSelect(target.value, keyName);
  };

  return (
    <div>
      <select value={selected} onChange={setSelect} disabled={disabled}>
        {items.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

BaseSelect.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]).isRequired,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ),
  selected: PropTypes.any,
  changeSelect: PropTypes.func.isRequired,
  keyName: PropTypes.any,
  disabled: PropTypes.bool,
};
export default BaseSelect;
