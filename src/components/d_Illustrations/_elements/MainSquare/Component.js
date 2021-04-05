// == Import npm
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

// == Import
import '../style.scss';
import './style.scss';
import SMainSquare, { tHover } from './SMainSquare';

const MainSquare = React.forwardRef(({
  size, columnStart, rowStart, color, bottom, kanjiIndex, rightAnswers,
}, ref) => {
  // cC for classComponent
  const cC = 'mainSquare';
  const cC2 = 'square';

  const colorHsl = gsap.utils.splitColor(color, true);

  const [transitionHover, setTransitionHover] = useState(gsap.timeline(
    { paused: true, duration: 0.35 },
  ));

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
    setTransitionHover(tHover(
      transitionHover, cRef.current, infosRef.current, colorHsl, duration, bottom,
    ));
  }, []);

  useEffect(() => {
    if (!answer && rightAnswers[kanjiIndex]) {
      // could do it with one state but this makes it a bit easier for me, for the naming
      setAnswer(rightAnswers[kanjiIndex].answer);
      setInfos(rightAnswers[kanjiIndex].infosAnswer);
    }
  }, [rightAnswers]);

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
        if (answer) {
          transitionHover.play();
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
          transitionHover.timeScale(1.3).reverse().eventCallback('onReverseComplete', clearProps);
        }
      }}
    >
      {answer && (
      <>
        <span
          className={`${cC}__text--hidden ${cC}__text__kanjiInfos`}
          ref={(e) => {
          // need the ref to make the additional infos visible, can't put in the other ref
          // since display-none is on the blocs with text--hidden
          // so need the inline style to be on them as well
            infosRef.current.push(e);
          }}
        >
          <span className={`${cC}__text__kanjiInfos--kana`}>
            {answer.kana}
          </span>
          {answer.kanaEn}
        </span>
        {answer.kanji}
        <span
          className={`${cC}__text--hidden ${cC}__text__kanjiInfos`}
          ref={(e) => {
            infosRef.current.push(e);
          }}
        >
          {answer.en}
        </span>
        {infos.answeredWrong > 0
        && (
        <span
          className={`${cC}__text--hidden ${cC}__text__bottom`}
          ref={(e) => {
            infosRef.current.push(e);
          }}
        >
          wrong: {infos.answeredWrong} time{infos.answeredWrong > 1 && 's'}
        </span>
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
  bottom: PropTypes.bool.isRequired,
  kanjiIndex: PropTypes.number.isRequired,
  rightAnswers: PropTypes.array.isRequired,
};

// == Export
export default MainSquare;
