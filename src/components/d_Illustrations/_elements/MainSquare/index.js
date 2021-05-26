// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Color } from 'framer';

// == Import
import { zIMainSquareHover } from 'src/styles/g';
import { tMSIFontSize, tMSIBFontSize } from 'src/styles/typo';
import { motion } from 'framer-motion';
import { aAnimateOn } from 'src/components/d_Illustrations/_helpers/animation';
import SMainSquare, { SKanji, SInfos, SInfosBottom } from './SMainSquare';
import { lIllu } from 'src/assets/labels';

const MainSquare = ({
  size, columnStart, rowStart, color, position, kanjiIndex, kanjisArr,
}) => {
  const [answer, setAnswer] = useState(false);
  const [infos, setInfos] = useState(false);
  const [vMainSquare, setVMainSquare] = useState({
    initial: { scale: 0 },
    animateOff: { scale: 0.2 },
    animateOn: aAnimateOn,
    whileHoverEmpty: { scale: 1.5 },
  });
  const [vInfos, setVInfos] = useState({
    infos: {}, infosB: {}, kana: {}, kanji: {},
  });

  useEffect(() => {
    const colorI = Color(color);
    let colorD1 = Color.darken(colorI, colorI.l * 30);
    colorD1 = Color.toHexString(Color.desaturate(colorD1, colorI.l * 15));
    const scaleFactor = 8 / size;

    setVMainSquare({
      ...vMainSquare,
      whileHoverOn: {
        scale: scaleFactor,
        zIndex: zIMainSquareHover,
        transformOrigin: position,
        padding: `${8 / scaleFactor}px`,
        backgroundColor: colorD1,
        transition: { type: 'spring', damping: 15 },
      },
    });

    setVInfos({
      infos: {
        initial: { fontSize: 0 },
        whileHoverOn: { display: 'block', opacity: 1, fontSize: `${tMSIFontSize / scaleFactor}px` },
      },
      infosB: {
        initial: { fontSize: 0 },
        whileHoverOn: { fontSize: `${tMSIBFontSize / scaleFactor}px`, bottom: `${8 / scaleFactor}px` },
      },
      kana: {
        whileHoverOn: { marginRight: `${8 / scaleFactor}px` },
      },
      kanji: {
        whileHoverOn: { fontSize: `${28 / scaleFactor}px`, margin: `${8 / scaleFactor}px` },
      },
    });
  }, []);

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
    // checkForAnimation();
  }, [kanjisArr]);

  return (
    <SMainSquare
      s={{
        color, size, columnStart, rowStart,
      }}
      variants={vMainSquare}
      initial="initial"
      animate={kanjisArr.length > kanjiIndex ? 'animateOn' : 'animateOff'}
      // eslint-disable-next-line no-nested-ternary
      whileHover={!answer.kanji && kanjisArr.length > kanjiIndex ? 'whileHoverEmpty' : kanjisArr.length > kanjiIndex ? 'whileHoverOn' : 'whileHoverOff'}
      onMouseEnter={() => setVMainSquare({ ...vMainSquare, animateOn: aAnimateOn })}
      exit="initial"
      aria-label={lIllu.mainSquare}
    >
      {answer && (
      <>
        <SInfos variants={vInfos.infos}>
          <motion.span variants={vInfos.kana}>
            {answer.kana}
          </motion.span>
          {answer.kanaEn}
        </SInfos>
        <SKanji variants={vInfos.kanji}>
          {answer.kanji}
        </SKanji>
        <SInfos variants={vInfos.infos}>
          {answer.en}
        </SInfos>
        {infos.answeredWrong > 0
        && (
        <SInfosBottom variants={vInfos.infosB}>
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
