// == Import npm
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { TimelineLite, TweenLite } from 'gsap';

// == Import
import '../style.scss';
import './style.scss';

const MainSquare = React.forwardRef(({
  size, columnStart, rowStart, color, kanjiIndex, rightAnswers,
}, ref) => {
  // cC for classComponent
  const cC = 'mainSquare';
  const cC2 = 'square';

  // c = component
  const cTl = new TimelineLite({ paused: true });
  // can update multiple timelines / animations at once
  // without having to remember to copy paste every time
  const duration = 0.35;

  const cRef = useRef(null);
  const infosRef = useRef([]);

  const [answer, setAnswer] = useState(false);
  const [infos, setInfos] = useState(false);

  useEffect(() => {
    if (!answer && rightAnswers[kanjiIndex]) {
      // could do it with one state but this makes it a bit esier for me, for the naming
      setAnswer(rightAnswers[kanjiIndex].answer);
      setInfos(rightAnswers[kanjiIndex].infosAnswer);
    }
  }, [rightAnswers]);

  return (
    <div
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
        // const y = cRef.current.position().left;
        // console.log(y);
        if (answer) {
          cTl.timeScale(0.7).to(cRef.current, duration, {
            // needs to have a higher z-index than the rest (current highest is 2)
            ease: 'power1.inOut', zIndex: 10, y: `${cOffset}vw`, x: `${cOffset}vw`, height: `${cNewSize}vw`, width: `${cNewSize}vw`, fontSize: '24px',
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
            console.log('on reverse complete');
            TweenLite.set(cRef.current, { clearProps: 'all' });
            TweenLite.to(cRef.current, 0, { backgroundColor: color });
            TweenLite.set(infosRef.current, { clearProps: 'all' });
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
    </div>
  );
});

MainSquare.propTypes = {
  size: PropTypes.number.isRequired,
  columnStart: PropTypes.number.isRequired,
  rowStart: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  kanjiIndex: PropTypes.number.isRequired,
  rightAnswers: PropTypes.array.isRequired,
};

// == Export
export default MainSquare;
