// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import PageWithText from 'src/components/c_Partials/PageWithText';

const About = ({ quizzesSlug, kanjisArr }) => (
  <>
    <PageWithText
      illu={{ useCase: 'readMe', kanjisArr }}
      textWithTitle={{
        title: 'Read me',
        text: ['This website was made as a portfolio project, therefore it has features (like the cheating buttons in the menu) that would usually not make sense, but facilitates its use.',
          { text: 'You can learn more on', link: 'the read me page of this project, on GitHub.', path: 'https://github.com/ludivineConstanti/Pixiji/blob/main/README.md' },
        ],
      }}
      buttonBig={{ text: 'next', path: `/quizzes/${quizzesSlug}` }}
    />
  </>
);

About.propTypes = {
  quizzesSlug: PropTypes.string.isRequired,
  kanjisArr: PropTypes.array.isRequired,
};

// == Export
export default About;
