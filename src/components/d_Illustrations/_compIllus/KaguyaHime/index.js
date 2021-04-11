// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import SKaguyaHime from './SKaguyaHime';

const KaguyaHime = ({ data }) => (
  <>
    <SKaguyaHime className="kaguyaHime">
      {data[0]}
    </SKaguyaHime>
  </>
);

KaguyaHime.propTypes = {
  data: PropTypes.array.isRequired,
};

// == Export
export default KaguyaHime;
