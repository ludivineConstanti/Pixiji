// == Import npm
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { gsap } from 'gsap';

// == Import
import './style.scss';

const TextWithTitle = ({ title, text }) => {
  // cC for classComponent
  const cC = 'textWithTitle';
  // const tl = gsap.timeline({ paused: true });
  // const component = useRef(null);

  useEffect(() => {
  }, []);

  return (
    <div className={cC}>
      <h1 className={`${cC}__title`}>{title}</h1>
      {text.map((e, i) => <p key={`textWithTitlePElement${i}`} className={`${cC}__text`}>{e}</p>)}
    </div>
  );
};

TextWithTitle.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.array.isRequired,
};

// == Export
export default TextWithTitle;
