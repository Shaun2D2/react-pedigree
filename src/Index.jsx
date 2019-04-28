import { SteppedLineTo } from 'react-lineto';
import React, { Component } from 'react';

import Card from './Card';

import './Index.scss';

export const generateLines = (generations) => {
  const lines = [];

  generations.forEach((gen, genIndex) => {
    let counter = 0;

    if (genIndex === 0 && gen.length === 1) {
      return;
    }

    gen.forEach((item, index) => {
      lines.push(
        <SteppedLineTo
          from={`line-${genIndex}-${index}`}
          to={`line-${genIndex - 1}-${counter}`}
          delay={1}
          orientation="h"
          borderColor="#ccc"
          borderWidth={2}
          zIndex={-1}
          within="pedigree"
          fromAnchor="50px 65px"
          toAnchor="60px 60px"
        />,
      );

      if ((index + 1) % 2 === 0) {
        counter += 1;
      }
    });
  });

  return lines;
};

const Column = ({ cardContent, generation }) => (
  <div className="pedigree__column">
    {
      cardContent.map((item, index) => (
        <Card
          name={item.name}
          description={item.description}
          customClass={`line-${generation}-${index}`}
          small={generation > 3}
        />
      ))
    }
  </div>
);

class Pedigree extends Component {
  static propTypes = {
    data: PropTypes.array,
  }

  constructor(props) {
    super(props);

    this.state = {
      height: props.data.length * 200,
    };
  }

  render() {
    const { data } = this.props;
    const { height } = this.state;
    return (
      <div className="pedigree-container">
        <div className="pedigree" style={{ height }}>
          { data.map((generation, index) => (
            <Column
              cardContent={generation}
              generation={index}
            />
          ))
          }
        </div>
        {generateLines(data)}
      </div>
    );
  }
}

export default Pedigree;
