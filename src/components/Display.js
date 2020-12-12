import PropTypes from 'prop-types';
import React from 'react';

const Display = ({ result }) => (
  <>
    <div className="result">{result}</div>
  </>
);

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};
export default Display;
