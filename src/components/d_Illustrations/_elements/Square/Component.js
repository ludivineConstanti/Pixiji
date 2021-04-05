// == Import npm
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

// == Import
import '../style.scss';

const Square = React.forwardRef(({
  size, columnStart, rowStart, color, kanjiIndex, rightAnswersLength,
}, ref) => {
  // cC for classComponent
  const cC = 'square';
  const cRef = useRef(null);
  // c = component
  const cTl = gsap.timeline({ paused: true });
  return (
    <div
      className={`${cC} ${cC}--size${size} ${cC}--columnStart${columnStart} ${cC}--rowStart${rowStart}`}
      style={{ backgroundColor: `${color}` }}
      ref={(e) => {
        ref(e);
        cRef.current = e;
      }}
      onMouseOver={() => {
        if (rightAnswersLength >= kanjiIndex) {
          cTl.to(cRef.current, 0.25, { scale: '1.5', zIndex: '5' }).play();
        }
      }}
      onMouseLeave={() => {
        const clearProps = () => {
          gsap.set(cRef.current, { clearProps: 'all' });
          gsap.to(cRef.current, 0, { backgroundColor: color });
        };
        cTl.reverse().eventCallback('onReverseComplete', clearProps);
      }}
    />
  );
});

Square.propTypes = {
  size: PropTypes.number.isRequired,
  columnStart: PropTypes.number.isRequired,
  rowStart: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  kanjiIndex: PropTypes.number.isRequired,
  rightAnswersLength: PropTypes.number.isRequired,
};

// == Export
export default Square;