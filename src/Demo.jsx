// import { SteppedLineTo } from 'react-lineto';
import LineTo from 'react-lineto';
import React from 'react';

const Demo = () => (
    <div className="example-container">
        <div 
            style={{ 
                display: 'inline-block', 
                width: 100, 
                border: '1px solid blue',
                height: 50,
                backgroundColor: '#FFF'
            }}
            className="A"
        />

        <div 
            style={{ 
                display: 'inline-block', 
                width: 100, 
                border: '1px solid red',
                height: 50,
                marginLeft: 100,
                backgroundColor: '#FFF'
            }}
            className="B"
        />
        <LineTo 
            from="A" 
            to="B" 
            borderColor="black"
            borderStyle="solid"
            borderWidth={1}
            delay={1}
            zIndex={-1}
        />
    </div>
);

export default Demo;