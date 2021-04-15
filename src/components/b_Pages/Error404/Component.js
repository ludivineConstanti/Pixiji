// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import PageWithText from 'src/components/c_Partials/PageWithText';

const Error404 = ({ kanjisArr }) => (
  <>
    <PageWithText
      illu={{ useCase: 'error404', kanjisArr }}
      textWithTitle={{
        title: '404',
        text: ['Congratulation! You found the 404 page!',
        ],
      }}
      buttonBig={{ text: 'next' }}
    />
  </>
);

Error404.propTypes = {
  kanjisArr: PropTypes.array.isRequired,
};

// == Export
export default Error404;
