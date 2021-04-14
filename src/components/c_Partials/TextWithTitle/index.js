// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import ButtonInText from 'src/components/e_Interactives/ButtonInText';
import STextWithTitle, { STitle, SText } from './STextWithTitle';

const TextWithTitle = ({ title, text, button }) => (
  <STextWithTitle>
    <STitle>{title}</STitle>
    {// eslint-disable-next-line react/no-array-index-key
      text.map((e, i) => <SText key={`textWithTitlePElement${i}`}>{e}</SText>)
}{ button && <ButtonInText text={button.text} path={button.path} />}
  </STextWithTitle>
);

TextWithTitle.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.array.isRequired,
  button: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

TextWithTitle.defaultProps = {
  button: false,
};

// == Export
export default TextWithTitle;
