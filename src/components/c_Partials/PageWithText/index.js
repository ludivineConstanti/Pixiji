// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import ButtonBig from 'src/components/e_Interactives/ButtonBig';
import TextWithTitle from 'src/components/c_Partials/TextWithTitle';
import Illu from 'src/components/d_Illustrations/Illu';

const PageWithText = ({ illu, textWithTitle, buttonBig }) => (
  <>
    <Illu useCase={illu.useCase} kanjisArr={illu.kanjisArr} />
    <TextWithTitle
      title={textWithTitle.title}
      text={textWithTitle.text}
    />
    <ButtonBig text={buttonBig.text} show={buttonBig.show} />
  </>
);

PageWithText.propTypes = {
  illu: PropTypes.object.isRequired,
  textWithTitle: PropTypes.object.isRequired,
  buttonBig: PropTypes.object.isRequired,
};

// == Export
export default PageWithText;
