// == Import npm
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

// == Import
import '../style.scss';
import { zIMainSquareHover } from 'src/styles/g';
import SMainSquare, { SInfos, SInfosKana, SInfosBottom } from './SMainSquare';

const MainSquare = React.forwardRef(({
  size, columnStart, rowStart, color, position, kanjiIndex, kanjisArr,
}, ref) => {
  // cC for classComponent
  const cC = 'mainSquare';
  const cC2 = 'square';

  const colorHsl = gsap.utils.splitColor(color, true);

  // c = component
  const cTl = gsap.timeline({ paused: true });
  // can update multiple timelines / animations at once
  // without having to remember to copy paste every time
  const duration = 0.35;

  const cRef = useRef(null);
  const infosRef = useRef([]);

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

  return (
    <SMainSquare
      className={`${cC} ${cC2} ${cC2}--size${size} ${cC2}--columnStart${columnStart} ${cC2}--rowStart${rowStart}`}
      style={{ backgroundColor: `${color}` }}
      ref={(e) => {
        // uses the function given by the parent to give references to it
        ref(e);
        // create local reference
        cRef.current = e;
      }}
      onMouseEnter={() => {
        // takes the width of the div, in px, and converts it in vw
        const cWidth = cRef.current.clientWidth / document.documentElement.clientWidth * 100;
        const cNewSize = 8.8;
        const cOffset = (cWidth - cNewSize) / 2;
        let [hue, light, saturation] = colorHsl;
        if (saturation > 50) saturation = 50;
        if (light > 50) light = 50;
        else light -= 10;
        // eslint-disable-next-line prefer-destructuring
        if (light < 20) light = colorHsl[2];
        if (answer) {
          cTl.timeScale(0.7).to(cRef.current, duration, {
            // needs to have a higher z-index than the rest (current highest is 2)
            ease: 'power1.inOut',
            zIndex: `${zIMainSquareHover}`,
            y: `${position === 'bottom' ? (cOffset * 2).toFixed(0) : (cOffset).toFixed(0)}vw`,
            x: `${position === 'right' ? (cOffset * 2).toFixed(0) : (cOffset).toFixed(0)}vw`,
            height: `${cNewSize}vw`,
            width: `${cNewSize}vw`,
            fontSize: '24px',
            backgroundColor: `hsl(${hue}, ${saturation}%, ${light}%)`,
          }).to(infosRef.current, duration - 0.1, {
            ease: 'power1.inOut', display: 'block', opacity: 1, margin: '8px 0 8px 0',
            // the animation of the second group needs a slight delay
            // otherwise the text in the middle jumps
            // need to try to keep the delay at a minimum
            // otherwise animation looks laggy (especially when exit)
          }, duration / 2.5).play();
        }
      }}
      onMouseLeave={() => {
        if (answer) {
          const clearProps = () => {
            gsap.set(cRef.current, { clearProps: 'all' });
            // I need to put the background color back in, since it is only in inline style
            // I tried clearing all the properties individually so that I would not need to do that
            // but somehow, it didn't work as well
            // I also didn't find how to give a list of properties you want to keep
            // instead of the ones you want to get rid of
            gsap.to(cRef.current, 0, { backgroundColor: color });
            gsap.set(infosRef.current, { clearProps: 'all' });
          };
          // timescale, put 1 => plays normally
          // puts 2 => divide time per 2
          cTl.timeScale(1.3).reverse().eventCallback('onReverseComplete', clearProps);
          /* .eventCallback('onReverseComplete', () => {
            cTl.set(cRef.current, { clearProps: 'all' });
          }); */
        }
      }}
    >
      {answer && (
      <>
        <SInfos
          ref={(e) => {
          // need the ref to make the additional infos visible, can't put in the other ref
          // since display-none is on the blocs with text--hidden
          // so need the inline style to be on them as well
            infosRef.current.push(e);
          }}
        >
          <SInfosKana>
            {answer.kana}
          </SInfosKana>
          {answer.kanaEn}
        </SInfos>
        {answer.kanji}
        <SInfos
          ref={(e) => {
            infosRef.current.push(e);
          }}
        >
          {answer.en}
        </SInfos>
        {infos.answeredWrong > 0
        && (
        <SInfosBottom
          ref={(e) => {
            infosRef.current.push(e);
          }}
        >
          wrong: {infos.answeredWrong} time{infos.answeredWrong > 1 && 's'}
        </SInfosBottom>
        )}
      </>
      ) }
    </SMainSquare>
  );
});

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
