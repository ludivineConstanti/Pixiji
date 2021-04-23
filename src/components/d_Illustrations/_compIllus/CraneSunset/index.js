// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
// import { useAnimation } from 'framer-motion';

// == Import
import IlluGround from 'src/components/d_Illustrations/_elements/IlluGround';
import {
  SSun, SCloudLeft, SCloudRight, SRockLeft, SBaby, SAdult, SRockRight,
} from './SCraneSunset';

const CraneSunset = ({ data, kanjis, numKanjis }) =>
// const cCloudLeft = useAnimation();

// const refCloudLeft = useRef(null);

// const [vCloudRight, setVCloudRight] = useState({});

// const animateCloudRight = () => {
//   if (kanjis >= numKanjis[2]) {
//     setVCloudRight({
//       animate: {
//         x: 70,
//         transition: {
//           repeat: Infinity,
//           repeatType: 'mirror',
//           duration: 9,
//         },
//       },
//     });
//   }
// };

// const animateCloudLeft = () => {
//   if (kanjis >= numKanjis[1]) {
//     cCloudLeft.start({
//       x: [0, 50],
//       transition: {
//         repeat: Infinity,
//         repeatType: 'reverse',
//         ease: 'easeInOut',
//         duration: 5,
//       },
//     });
//   }
// };

// useEffect(() => {
//   animateCloudLeft();
//   if (!vCloudRight.animate) {
//     animateCloudRight();
//   }
// }, [kanjis]);

  (
    <>
      <SSun>
        {data[0]}
      </SSun>
      <SCloudLeft>
        {data[1]}
      </SCloudLeft>
      <SCloudRight>
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
CraneSunset.propTypes = {
  data: PropTypes.array.isRequired,
  kanjis: PropTypes.number.isRequired,
  numKanjis: PropTypes.array.isRequired,
};

// == Export
export default CraneSunset;
