// == Import npm
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useAnimation } from 'framer-motion';

// == Import
import './style.scss';
import IlluGround from 'src/components/d_Illustrations/_elements/IlluGround';
import {
  SSun, SCloudLeft, SCloudRight, SRockLeft, SBaby, SAdult, SRockRight,
} from './SCraneSunset';

const CraneSunset = ({ data, kanjisArr, numKanjis }) => {
  const cC = 'craneSunset';

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
      <SSun className={`${cC}__sun`}>
        {data[0]}
      </SSun>
      <SCloudLeft
        className={`${cC}__cloudLeft`}
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
        className={`${cC}__cloudRight`}
        onMouseEnter={() => setVCloudRight({})}
        onMouseLeave={() => animateCloudRight()}
        variants={vCloudRight}
        animate="animate"
      >
        {data[2]}
      </SCloudRight>
      <SRockLeft className={`${cC}__rockLeft`}>
        {data[3]}
      </SRockLeft>
      <SBaby className={`${cC}__baby`}>
        {data[4]}
      </SBaby>
      <SAdult className={`${cC}__adult`}>
        {data[5]}
      </SAdult>
      <SRockRight className={`${cC}__rockRight`}>
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
