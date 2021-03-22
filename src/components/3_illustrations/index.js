// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import 'src/components/3_illustrations/style.scss';

const Illustration = ({ data, className }) => {
  const content = [];
  const contentKeys = Object.keys(data.squares);

  contentKeys.forEach((key) => {
    const deco = [];
    data.squares[key].deco.forEach((element) => {
      deco.push(<rect
        x={element.x}
        y={element.y}
        fill={element.fill}
        className="square"
      />);
    });
    content.push(
      <g>
        <rect
          x={data.squares[key].main.x}
          y={data.squares[key].main.y}
          width={data.squares[key].main.size}
          height={data.squares[key].main.size}
          fill={data.squares[key].main.fill}
        />
        {deco}
      </g>,
    );
  });

  if (data.final) {
    data.final.forEach((element) => {
      content.push(<rect
        x={element.x}
        y={element.y}
        width={element.size}
        height={element.size}
        fill={element.fill}
      />);
    });
  }

  return (
    <svg
      className={className}
      viewBox={`0 0 ${data.width} ${data.height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {content}
    </svg>
  );
};

Illustration.propTypes = {
  data: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    squares: PropTypes.object.isRequired,
    final: PropTypes.array,
  }).isRequired,
  className: PropTypes.string.isRequired,
};

// == Export
export default Illustration;
