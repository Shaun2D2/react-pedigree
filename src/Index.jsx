import { SteppedLineTo } from 'react-lineto';
import React, { Component, Fragment } from 'react';

import Card from './Card';

import './Index.scss';

const generateLines = (generations) => {
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
                />
            );

            if((index + 1) % 2 === 0) {
                counter++;
            }
        });

    });

    return lines;
};

const Column = ({ cardContent, generation }) => {
    var inc = 0;

    return (
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
    )
}

const Pedigree = ({ data }) => (
    <div className="pedigree-container">
        <div className="pedigree">
            { data.map((generation, index) => (
                <Column 
                    cardContent={generation}
                    generation={index}
                />
            )) }
        </div>
        {generateLines(data)}
    </div>
)

export default Pedigree;