// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import PageWithText from 'src/components/c_Partials/PageWithText';

const About = ({ kanjisArr }) => (
  <>
    <PageWithText
      illu={{ useCase: 'readMe', kanjisArr }}
      textWithTitle={{
        title: 'Read me',
        text: ['This website was made as a portfolio project, therefore it has feature (like the cheating buttons in the menu) that facilitates its use. You can learn more by clicking on this link.',
        ],
      }}
      buttonBig={{ text: 'next', show: true, path: '/quizzes' }}
    />
  </>
);

About.propTypes = {
  kanjisArr: PropTypes.array.isRequired,
};

// == Export
export default About;