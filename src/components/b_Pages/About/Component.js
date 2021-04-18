// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import PageWithText from 'src/components/c_Partials/PageWithText';

const About = ({ kanjisArr, quizzesSlug }) => (
  <>
    <PageWithText
      illu={{ useCase: 'about', kanjisArr }}
      textWithTitle={{
        title: 'About',
        text: ['The informations for the quizzes and their answers was taken from wikipedia and jisho.org.',
          'The illustrations are self-made.',
        ],
      }}
      buttonBig={{ text: 'Quizzes', path: `/quizzes/${quizzesSlug}` }}
    />
  </>
);

About.propTypes = {
  kanjisArr: PropTypes.array.isRequired,
  quizzesSlug: PropTypes.string.isRequired,
};

// == Export
export default About;
