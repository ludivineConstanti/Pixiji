// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import ButtonInText from 'src/components/e_Interactives/ButtonInText';
import { vBackgroundText } from 'src/styles/animation';
import STextWithTitle, {
  STitle, SSquareTitle, SText, SLink, SBackgroundColor,
} from './STextWithTitle';

const TextWithTitle = ({
  title, text, button, colorMain,
}) => {
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
    exit: { opacity: 0, x: -150, transition: { duration: 0.25 } },
  };

  const vText = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0, transition: { delay: 0.25 } },
    exit: { opacity: 0, x: -250, transition: { duration: 0.25 } },
  };

  return (
    <STextWithTitle
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <STitle variants={vTitle}><SSquareTitle variants={vSquareTitle} />{title}
      </STitle>
      {// eslint-disable-next-line react/no-array-index-key
      text.map((e, i) => (
        <SText variants={vText} key={`textWithTitlePElement${i}`}>
          {e.text ? (<>{e.text} <SLink href={e.path} target="_blank">{e.link}</SLink></>) : e}
        </SText>
      ))
}
      { button && (
      <ButtonInText text={button.text} path={button.path} />
      )}
      <SBackgroundColor s={{ colorMain }} variants={vBackgroundText} />
    </STextWithTitle>
  );
};

TextWithTitle.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.array.isRequired,
  button: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  colorMain: PropTypes.string.isRequired,
};

TextWithTitle.defaultProps = {
  button: false,
};

// == Export
export default TextWithTitle;
