// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import ButtonInText from 'src/components/e_Interactives/ButtonInText';
import STextWithTitle, { STitle, SSquareTitle, SText } from './STextWithTitle';

const TextWithTitle = ({ title, text, button }) => {
  const vSquareTitle = {
    initial: { width: '1%', left: 0 },
    animate: {
      scaleX: [0, 100, 0],
      left: ['100%', '50%', '0%'],
      transition: {
        duration: 0.5,
      },
    },
  };
  const vTitle = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.25 } },
  };
  return (
    <STextWithTitle
      initial="initial"
      animate="animate"
    >
      <STitle variants={vTitle}><SSquareTitle variants={vSquareTitle} />{title}
      </STitle>
      {// eslint-disable-next-line react/no-array-index-key
      text.map((e, i) => <SText key={`textWithTitlePElement${i}`}>{e}</SText>)
}{ button && <ButtonInText text={button.text} path={button.path} />}
    </STextWithTitle>
  );
};

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
