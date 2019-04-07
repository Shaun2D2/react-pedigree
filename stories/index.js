import React from 'react';
import { storiesOf } from '@storybook/react';

import Index from '../src/Index';
import Card from '../src/Card';
import Demo from '../src/Demo';

storiesOf('Card', module)
  .add('with image', () => (
    <Card
      image="https://via.placeholder.com/150"
      name="Jackson"
      description="10-1-2018"
    />
  ))
  .add('with no image', () => (
    <Card
      name="Jackson"
      description="10-1-2018"
    />
  ));

storiesOf('Pedigree', module)
  .add('with last Gen', () => (
      <Index />
  ));

storiesOf('Demo', module)
  .add('with last Gen', () => (
      <Demo />
  ));