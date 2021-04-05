// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import STextWithTitle from './STextWithTitle';

const TextWithTitle = ({ title, text }) => {
  // cC for classComponent
  const cC = 'textWithTitle';

  return (
    <STextWithTitle className={cC}>
      <h1 className={`${cC}__title`}>{title}</h1>
      {// eslint-disable-next-line react/no-array-index-key
      text.map((e, i) => <p key={`textWithTitlePElement${i}`} className={`${cC}__text`}>{e}</p>)
}
    </STextWithTitle>
  );
};

TextWithTitle.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.array.isRequired,
};

// == Export
export default TextWithTitle;
