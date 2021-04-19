// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Color } from 'framer';

// == Import
import '../style.scss';
import { zIMainSquareHover } from 'src/styles/g';
import { tMSIFontSize, tMSIBFontSize } from 'src/styles/typo';
import { motion } from 'framer-motion';
import SMainSquare, { SKanji, SInfos, SInfosBottom } from './SMainSquare';

const MainSquare = ({
  size, columnStart, rowStart, color, position, kanjiIndex, kanjisArr,
}) => {
  // cC for classComponent
  const cC = 'mainSquare';
  const cC2 = 'square';

  const [answer, setAnswer] = useState(false);
  const [infos, setInfos] = useState(false);

  useEffect(() => {
    if (!answer && kanjisArr[kanjiIndex]) {
      if (kanjisArr[kanjiIndex].answer) {
        setAnswer(kanjisArr[kanjiIndex].answer);
        setInfos(kanjisArr[kanjiIndex].infosAnswer);
      }
      else {
        setAnswer(kanjisArr[kanjiIndex]);
      }
    }
    else if (!kanjisArr.length) {
      setAnswer(false);
      setInfos(false);
    }
  }, [kanjisArr]);

  const colorI = Color(color);
  const colorD1 = Color.toHexString(Color.darken(colorI, colorI.l * 30));

  const scaleFactor = 8 / size;

  const vMainSquare = {
    initial: { scale: 0 },
    animateOff: { scale: 0.2 },
    animateOn: { scale: 1 },
    whileHoverOn: {
      scale: scaleFactor,
      zIndex: zIMainSquareHover,
      transformOrigin: position,
      padding: `${8 / scaleFactor}px`,
      backgroundColor: colorD1,
    },
  };

  const vInfos = {
    initial: { fontSize: 0 },
    whileHoverOn: { display: 'block', opacity: 1, fontSize: `${tMSIFontSize / scaleFactor}px` },
  };

  const vInfosB = {
    initial: { fontSize: 0 },
    whileHoverOn: { fontSize: `${tMSIBFontSize / scaleFactor}px`, bottom: `${8 / scaleFactor}px` },
  };

  const vKana = {
    whileHoverOn: { marginRight: `${8 / scaleFactor}px` },
  };

  const vKanji = {
    whileHoverOn: { fontSize: `${28 / scaleFactor}px`, margin: `${8 / scaleFactor}px` },
  };

  return (
    <SMainSquare
      className={`${cC} ${cC2} ${cC2}--size${size} ${cC2}--columnStart${columnStart} ${cC2}--rowStart${rowStart}`}
      style={{ backgroundColor: `${color}` }}
      variants={vMainSquare}
      initial="initial"
      animate={kanjisArr.length > kanjiIndex ? 'animateOn' : 'animateOff'}
      whileHover={kanjisArr.length > kanjiIndex ? 'whileHoverOn' : 'whileHoverOff'}
      exit="initial"
    >
      {answer && (
      <>
        <SInfos variants={vInfos}>
          <motion.span variants={vKana}>
            {answer.kana}
          </motion.span>
          {answer.kanaEn}
        </SInfos>
        <SKanji variants={vKanji}>
          {answer.kanji}
        </SKanji>
        <SInfos variants={vInfos}>
          {answer.en}
        </SInfos>
        {infos.answeredWrong > 0
        && (
        <SInfosBottom variants={vInfosB}>
          wrong: {infos.answeredWrong} time{infos.answeredWrong > 1 && 's'}
        </SInfosBottom>
        )}
      </>
      ) }
    </SMainSquare>
  );
};

MainSquare.propTypes = {
  size: PropTypes.number.isRequired,
  columnStart: PropTypes.number.isRequired,
  rowStart: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  kanjiIndex: PropTypes.number.isRequired,
  kanjisArr: PropTypes.array.isRequired,
};

// == Export
export default MainSquare;
