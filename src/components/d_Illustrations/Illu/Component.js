// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Color } from 'framer';

// == Import
import createIllustration from 'src/components/d_Illustrations/_helpers/createIllustration';
import arrDataIllu from 'src/components/d_Illustrations/_data/dataIndex';
import IlluIndex from 'src/components/d_Illustrations/_compIllus/IlluIndex';
import { SPColorMain, SColorMain } from './SIllu';

const Illu = ({
  useCase, index, animationCase, colorMain, pColorMain, kanjisArr, updateValueGlobal,
}) => {
  const { arrIllu, colorIllu } = arrDataIllu[useCase][index];

  const arrNumKanjis = [];
  let numKanjisCounter = 0;
  for (let i = 0; i < arrIllu.length; i += 1) {
    numKanjisCounter += arrIllu[i].length;
    arrNumKanjis.push(numKanjisCounter);
  }
  const colorI = Color.toHsl(Color(colorIllu));
  console.log(colorI);
  colorI.l /= 1.25;
  colorI.s = 1;
  const colorIlluL1 = Color.toHexString(Color.lighten(Color(colorIllu), 10));
  const colorIlluD1 = Color.toHexString(Color(colorI));

  useEffect(() => {
    updateValueGlobal({ prop: ['colorMain', 'colorMainL1', 'colorMainD1'], value: [colorIllu, colorIlluL1, colorIlluD1] });
    setTimeout(() => {
      updateValueGlobal({ prop: ['pColorMain'], value: [colorIllu] });
    }, 1000);
  }, []);

  const arrIlluFormatted = [];
  // need the number at the end so that it doesn't always start from 0
  // while pushing the groups in the squareContainer array
  let beginAtIndex = 0;
  for (let i = 0; i < arrIllu.length; i += 1) {
    arrIlluFormatted.push(
      createIllustration(arrIllu[i], i, beginAtIndex, kanjisArr),
    );
    beginAtIndex += arrIllu[i].length;
  }

  const vSColorMain = {
    initial: { width: '0vw' },
    animate: { width: '100vw', transition: { mass: 5 } },
  };

  return (
    <>
      <SPColorMain s={{ color: pColorMain }} />
      <SColorMain
        s={{ color: colorMain }}
        variants={vSColorMain}
        initial="initial"
        animate="animate"
      />
      <IlluIndex
        useCase={useCase}
        index={index}
        data={arrIlluFormatted}
        kanjisArr={kanjisArr}
        arrNumKanjis={arrNumKanjis}
      />
    </>
  );
};

Illu.propTypes = {
  useCase: PropTypes.string.isRequired,
  index: PropTypes.number,
  animationCase: PropTypes.string,
  colorMain: PropTypes.string.isRequired,
  pColorMain: PropTypes.string.isRequired,
  kanjisArr: PropTypes.array,
  updateValueGlobal: PropTypes.func.isRequired,
};

Illu.defaultProps = {
  kanjisArr: [],
  index: 0,
  animationCase: 'deco',
};

// == Export
export default Illu;
