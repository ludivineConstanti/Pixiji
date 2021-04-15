// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import PageWithText from 'src/components/c_Partials/PageWithText';

const About = ({ kanjisArr }) => (
  <>
    <PageWithText
      illu={{ useCase: 'about', kanjisArr }}
      textWithTitle={{
        title: 'About',
        text: ['The data for the quiz and answers was taken from wikipedia and jisho.org',
        ],
      }}
      buttonBig={{ text: 'next' }}
    />
  </>
);

About.propTypes = {
  kanjisArr: PropTypes.array.isRequired,
};

// == Export
export default About;
