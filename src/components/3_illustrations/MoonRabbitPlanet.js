// == Import npm
import React from 'react';
// import PropTypes from 'prop-types';

// == Import
import './style.scss';

const MoonRabbitPlanet = () => {
  const classContainer = 'moonRabbitPlanet';
  const classSquare = `${classContainer}__square`;
  const classMainSquare = `${classSquare} ${classSquare}--main`;
  const group = 'group';

  // width and height are obtained by looking at the illustration
  // the smallest unit of square is 1, depending on their number and size
  // the container of the illustration is smaller or bigger

  // the unitWidth and unitHeight are useful for nowing the position of the squares later
  // They represent the value we use to move the squares in percentage
  // (100 / 10 = 10 for width and height)
  const sizeContainer = {
    width: 10, height: 10, unitWidth: 10, unitHeight: 10,
  };

  const sizes = {};

  for (let i = 1; i <= 3; i += 1) {
    sizes[i] = {};
    const width = ((i / sizeContainer.width) * 100) - 1;
    const height = ((i / sizeContainer.height) * 100) - 1;
    sizes[i].width = width;
    sizes[i].height = height;
    sizes[i].left = width / 2;
    sizes[i].top = height / 2;
  }

  return (
    <div className={classContainer}>
      <div
        className={`${classSquare} ${group}1`}
        style={{
          backgroundColor: '#B6E7FF',
          width: `${sizes[1].width}%`,
          height: `${sizes[1].height}%`,
          left: `${(sizeContainer.unitWidth * 3) + sizes[1].left}%`,
          top: `${sizes[1].top}%`,
        }}
      />
      <div
        className={`${classSquare} ${group}1`}
        style={{
          backgroundColor: '#60ACD2',
          width: `${sizes[1].width}%`,
          height: `${sizes[1].height}%`,
          left: `${sizes[1].left}%`,
          top: `${(sizeContainer.unitHeight * 3) + sizes[1].top}%`,
        }}
      />
      <div
        className={`${classSquare} ${group}2`}
        style={{
          backgroundColor: '#B6E7FF',
          width: `${sizes[1].width}%`,
          height: `${sizes[1].height}%`,
          left: `${(sizeContainer.unitWidth * 6) + sizes[1].left}%`,
          top: `${sizes[1].top}%`,
        }}
      />
      <div
        className={`${classSquare} ${group}2`}
        style={{
          backgroundColor: '#6CC9F8',
          width: `${sizes[1].width}%`,
          height: `${sizes[1].height}%`,
          left: `${(sizeContainer.unitWidth * 9) + sizes[1].left}%`,
          top: `${(sizeContainer.unitHeight * 3) + sizes[1].top}%`,
        }}
      />
      <div
        className={`${classSquare} ${group}3`}
        style={{
          backgroundColor: '#35637A',
          width: `${sizes[1].width}%`,
          height: `${sizes[1].height}%`,
          left: `${sizes[1].left}%`,
          top: `${(sizeContainer.unitHeight * 6) + sizes[1].top}%`,
        }}
      />
      <div
        className={`${classSquare} ${group}3`}
        style={{
          backgroundColor: '#2F4767',
          width: `${sizes[1].width}%`,
          height: `${sizes[1].height}%`,
          left: `${(sizeContainer.unitWidth * 3) + sizes[1].left}%`,
          top: `${(sizeContainer.unitHeight * 9) + sizes[1].top}%`,
        }}
      />
      <div
        className={`${classSquare} ${group}4`}
        style={{
          backgroundColor: '#26415A',
          width: `${sizes[1].width}%`,
          height: `${sizes[1].height}%`,
          left: `${(sizeContainer.unitWidth * 9) + sizes[1].left}%`,
          top: `${(sizeContainer.unitHeight * 6) + sizes[1].top}%`,
        }}
      />
      <div
        className={`${classSquare} ${group}4`}
        style={{
          backgroundColor: '#284A67',
          width: `${sizes[1].width}%`,
          height: `${sizes[1].height}%`,
          left: `${(sizeContainer.unitWidth * 6) + sizes[1].left}%`,
          top: `${(sizeContainer.unitHeight * 9) + sizes[1].top}%`,
        }}
      />
      <div
        className={`${classSquare} ${group}1`}
        style={{
          backgroundColor: '#83D0F6',
          width: `${sizes[2].width}%`,
          height: `${sizes[2].height}%`,
          left: `${(sizeContainer.unitWidth * 4) + sizes[2].left}%`,
          top: `${sizes[2].top}%`,
        }}
      />
      <div
        className={`${classSquare} ${group}1`}
        style={{
          backgroundColor: '#5897B7',
          width: `${sizes[2].width}%`,
          height: `${sizes[2].height}%`,
          left: `${sizes[2].left}%`,
          top: `${(sizeContainer.unitHeight * 4) + sizes[2].top}%`,
        }}
      />
      <div
        className={`${classSquare} ${group}2`}
        style={{
          backgroundColor: '#5AB2DE',
          width: `${sizes[2].width}%`,
          height: `${sizes[2].height}%`,
          left: `${(sizeContainer.unitWidth * 4) + sizes[2].left}%`,
          top: `${(sizeContainer.unitHeight * 2) + sizes[2].top}%`,
        }}
      />
      <div
        className={`${classSquare} ${group}2`}
        style={{
          backgroundColor: '#4788A8',
          width: `${sizes[2].width}%`,
          height: `${sizes[2].height}%`,
          left: `${(sizeContainer.unitWidth * 8) + sizes[2].left}%`,
          top: `${(sizeContainer.unitHeight * 4) + sizes[2].top}%`,
        }}
      />
      <div
        className={`${classSquare} ${group}3`}
        style={{
          backgroundColor: '#3D7E9E',
          width: `${sizes[2].width}%`,
          height: `${sizes[2].height}%`,
          left: `${(sizeContainer.unitWidth * 2) + sizes[2].left}%`,
          top: `${(sizeContainer.unitHeight * 4) + sizes[2].top}%`,
        }}
      />
      <div
        className={`${classSquare} ${group}3`}
        style={{
          backgroundColor: '#203E4E',
          width: `${sizes[2].width}%`,
          height: `${sizes[2].height}%`,
          left: `${(sizeContainer.unitWidth * 4) + sizes[2].left}%`,
          top: `${(sizeContainer.unitHeight * 8) + sizes[2].top}%`,
        }}
      />
      <div
        className={`${classSquare} ${group}4`}
        style={{
          backgroundColor: '#40728B',
          width: `${sizes[2].width}%`,
          height: `${sizes[2].height}%`,
          left: `${(sizeContainer.unitWidth * 6) + sizes[2].left}%`,
          top: `${(sizeContainer.unitHeight * 4) + sizes[2].top}%`,
        }}
      />
      <div
        className={`${classSquare} ${group}4`}
        style={{
          backgroundColor: '#284F64',
          width: `${sizes[2].width}%`,
          height: `${sizes[2].height}%`,
          left: `${(sizeContainer.unitWidth * 4) + sizes[2].left}%`,
          top: `${(sizeContainer.unitHeight * 6) + sizes[2].top}%`,
        }}
      />
      <div
        className={`${classSquare}`}
        style={{
          backgroundColor: '#48819D',
          width: `${sizes[2].width}%`,
          height: `${sizes[2].height}%`,
          left: `${(sizeContainer.unitWidth * 4) + sizes[2].left}%`,
          top: `${(sizeContainer.unitHeight * 4) + sizes[2].top}%`,
        }}
      />
      <div
        className={`${classMainSquare} ${group}1`}
        style={{
          backgroundColor: '#6DC7F4',
          width: `${sizes[3].width}%`,
          height: `${sizes[3].height}%`,
          left: `${sizeContainer.unitWidth + sizes[3].left}%`,
          top: `${sizeContainer.unitHeight + sizes[3].top}%`,
        }}
      >月
      </div>
      <div
        className={`${classMainSquare} ${group}2`}
        style={{
          backgroundColor: '#58BDF0',
          width: `${sizes[3].width}%`,
          height: `${sizes[3].height}%`,
          left: `${(sizeContainer.unitWidth * 6) + sizes[3].left}%`,
          top: `${sizeContainer.unitHeight + sizes[3].top}%`,
        }}
      >月
      </div>
      <div
        className={`${classMainSquare} ${group}3`}
        style={{
          backgroundColor: '#1D4154',
          width: `${sizes[3].width}%`,
          height: `${sizes[3].height}%`,
          left: `${sizeContainer.unitWidth + sizes[3].left}%`,
          top: `${(sizeContainer.unitHeight * 6) + sizes[3].top}%`,
        }}
      >月
      </div>
      <div
        className={`${classMainSquare} ${group}4`}
        style={{
          backgroundColor: '#324968',
          width: `${sizes[3].width}%`,
          height: `${sizes[3].height}%`,
          left: `${(sizeContainer.unitWidth * 6) + sizes[3].left}%`,
          top: `${(sizeContainer.unitHeight * 6) + sizes[3].top}%`,
        }}
      >月
      </div>
    </div>
  );
};

// == Export
export default MoonRabbitPlanet;
