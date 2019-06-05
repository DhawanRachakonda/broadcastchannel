import React from 'react';

import PropTypes from 'prop-types';

function onChangeInputValue(fn) {
  // eslint-disable-next-line func-names
  return function(e) {
    fn(e.currentTarget.value);
  };
}

function InputElement({ onChange, value, placeholder, className = '' }) {
  return (
    <input
      className={`input-element ${className}`}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChangeInputValue(onChange)}
    />
  );
}

InputElement.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default InputElement;
