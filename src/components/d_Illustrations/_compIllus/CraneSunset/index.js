// == Import npm
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useAnimation } from 'framer-motion';

// == Import
import IlluGround from 'src/components/d_Illustrations/_elements/IlluGround';
import {
  SSun, SCloudLeft, SCloudRight, SRockLeft, SBaby, SAdult, SRockRight,
} from './SCraneSunset';

const CraneSunset = ({ data, kanjisArr, numKanjis }) => {
  const cCloudLeft = useAnimation();

  const refCloudLeft = useRef(null);

  const [vCloudRight, setVCloudRight] = useState({});

  const animateCloudRight = () => {
    if (kanjisArr.length >= numKanjis[2]) {
      setVCloudRight({
        animate: {
          x: 70,
          transition: {
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 9,
          },
        },
      });
    }
  };

  const animateCloudLeft = () => {
    if (kanjisArr.length >= numKanjis[1]) {
      cCloudLeft.start(() => ({
        x: 50,
        transition: {
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 2,
        },
      }));
    }
  };

  useEffect(() => {
    animateCloudLeft();
    if (!vCloudRight.animate) {
      animateCloudRight();
    }
  }, [kanjisArr]);

  return (
    <>
      <SSun>
        {data[0]}
      </SSun>
      <SCloudLeft
        onMouseEnter={() => {
          cCloudLeft.stop();
          console.log(window.getComputedStyle(refCloudLeft.current).getPropertyValue('transform'));
        }}
        onMouseLeave={() => animateCloudLeft()}
        animate={cCloudLeft}
        ref={refCloudLeft}
      >
        {data[1]}
      </SCloudLeft>
      <SCloudRight
        onMouseEnter={() => setVCloudRight({})}
        onMouseLeave={() => animateCloudRight()}
        variants={vCloudRight}
        animate="animate"
      >
        {data[2]}
      </SCloudRight>
      <SRockLeft>
        {data[3]}
      </SRockLeft>
      <SBaby>
        {data[4]}
      </SBaby>
      <SAdult>
        {data[5]}
      </SAdult>
      <SRockRight>
        {data[6]}
      </SRockRight>
      <IlluGround color="#398084" />
    </>
  );
};

CraneSunset.propTypes = {
  data: PropTypes.array.isRequired,
  kanjisArr: PropTypes.array.isRequired,
  numKanjis: PropTypes.array.isRequired,
};

// == Export
export default CraneSunset;
