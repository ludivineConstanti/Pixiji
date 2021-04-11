// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import { SPlanet, SRabbitOnMoon } from './SRabbitOnMoon';

const RabbitOnMoon = ({ data }) => {
  const cC = 'moonRabbit';
  return (
    <>
      <SPlanet className={`${cC}__planet`}>
        {data[0]}
      </SPlanet>
      <SRabbitOnMoon className={`${cC}__rabbitOnMoon`}>
        <div className={`${cC}__rabbit`}>
          {data[1]}
        </div>
        <div className={`${cC}__moon`}>
          {data[2]}
        </div>
      </SRabbitOnMoon>
    </>
  );
};

RabbitOnMoon.propTypes = {
  data: PropTypes.array.isRequired,
};

// == Export
export default RabbitOnMoon;
