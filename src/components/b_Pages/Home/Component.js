// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import ButtonBig from 'src/components/e_Interactives/ButtonBig';
import TextWithTitle from 'src/components/c_Partials/TextWithTitle';
import Illu from 'src/components/d_Illustrations/Illu';

const Home = ({ kanjisArr }) => (
  <>
    <Illu useCase="home" kanjisArr={kanjisArr} />
    <TextWithTitle
      title="Pixiji"
      text={
        ['This website is born from the thought that kanjis (Chinese characters that are used in the Japanese writing system) would work well with pixel art.',
        ]
}
    />
    <ButtonBig text="next" show />
  </>
);

Home.propTypes = {
  kanjisArr: PropTypes.array.isRequired,
};

// == Export
export default Home;
