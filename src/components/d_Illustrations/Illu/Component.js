// == Import npm
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

// == Import
import { aQuiz, aQuizPreview, squaresGrow } from 'src/components/d_Illustrations/_helpers/transitions';
import createIllustration from 'src/components/d_Illustrations/_helpers/createIllustration';
import arrDataIllu from 'src/components/d_Illustrations/_data/dataIndex';
import IlluIndex from 'src/components/d_Illustrations/_compIllus/IlluIndex';

const Illu = ({
  useCase, index, animationCase, kanjisArr, updateValueGlobal,
}) => {
  const { arrIllu, colorIllu } = arrDataIllu[useCase][index];
  // I use 2 groups to keep a reference for the divs
  // one for the first animation where they all get reduced at the same time
  // GSAP needs individual arrays to figure out where their center is
  // the other to animate every time I answer a question
  const squareMainRef = useRef([]);
  for (let i = 0; i < arrIllu.length; i += 1) {
    squareMainRef.current.push([]);
  }
  const squareGroupRef = useRef([]);

  useEffect(() => {
    updateValueGlobal({ prop: ['colorMain'], value: [colorIllu] });
    setTimeout(() => {
      updateValueGlobal({ prop: ['pColorMain'], value: [colorIllu] });
    }, 1000);
  }, []);

  // useful for triggering the intro animation if left quiz and came back
  // otherwise, it just triggers if the array of answer is empty
  const [justStarted, setJustStarted] = useState(true);
  // useful to keep track of which kanji was updated last
  // useful mainly for knowing the starting point for the cheating button
  const [lastUpdated, setLastUpdated] = useState(0);

  useEffect(() => {
    // animation that updates the quiz when answer questions
    // need a loop so that it works with the cheating button too
    for (let i = lastUpdated; i < kanjisArr.length; i += 1) {
      squaresGrow(squareGroupRef.current[i]);
    }
    setLastUpdated(kanjisArr.length);
    // animation intro for the quiz
    // needs to check if the length of the kanjisArr changes
    // because of the cheating button
    if ((!kanjisArr.length || justStarted) && animationCase === 'quiz') {
      for (let i = 0; i < arrIllu.length; i += 1) {
        aQuiz(squareMainRef.current[i]);
      }
    } // animation intro for the quiz preview
    else if (animationCase === 'quizPreview') {
      for (let i = 0; i < arrIllu.length; i += 1) {
        aQuizPreview(squareMainRef.current[i]);
      }
    }
    setJustStarted(false);
  }, [kanjisArr]);

  const arrIlluFormatted = [];
  // need the number at the end so that it doesn't always start from 0
  // while pushing the groups in the squareContainer array
  let beginAtIndex = 0;
  for (let i = 0; i < arrIllu.length; i += 1) {
    arrIlluFormatted.push(
      createIllustration(arrIllu[i], i, squareMainRef, squareGroupRef, beginAtIndex, kanjisArr),
    );
    beginAtIndex += arrIllu[i].length;
  }

  return (
    <IlluIndex useCase={useCase} index={index} data={arrIlluFormatted} />
  );
};

Illu.propTypes = {
  useCase: PropTypes.string.isRequired,
  index: PropTypes.number,
  animationCase: PropTypes.string,
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
