import React from 'react';

import PropTypes from 'prop-types';

function ActionButton(props) {
  return (
    <button
      className={`action-button ${props.className || ''}`}
      type="submit"
      onClick={props.onAction}
    >
      <span>{props.text.toUpperCase()}</span>
    </button>
  );
}

ActionButton.propTypes = {
  text: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired,
  className: PropTypes.string,
};
export default ActionButton;
