// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import PageWithText from 'src/components/c_Partials/PageWithText';

const Error404 = ({ kanjisArr, quizzesSlug }) => (
  <>
    <PageWithText
      illu={{ useCase: 'error404', kanjisArr }}
      textWithTitle={{
        title: '404',
        text: ['Congratulation! You found the 404 page!',
          'If you want to visit other pages, here are a few links:',
        ],
      }}
      buttonBig={{ text: 'Quizzes', path: `/quizzes/${quizzesSlug}` }}
    />
  </>
);

Error404.propTypes = {
  kanjisArr: PropTypes.array.isRequired,
  quizzesSlug: PropTypes.string.isRequired,
};

// == Export
export default Error404;
