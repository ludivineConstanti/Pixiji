// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import PageWithText from 'src/components/c_Partials/PageWithText';

const Home = ({ kanjisArr }) => (
  <>
    <PageWithText
      illu={{ useCase: 'home', kanjisArr }}
      textWithTitle={{
        title: 'Pixiji',
        text: ['This website is born from the thought that kanjis (Chinese characters that are used in the Japanese writing system) would work well with pixel art.',
        ],
      }}
      buttonBig={{ text: 'next', show: true, path: '/read-me' }}
    />
  </>
);

Home.propTypes = {
  kanjisArr: PropTypes.array.isRequired,
};

// == Export
export default Home;
