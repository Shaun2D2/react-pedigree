import React from 'react';
import { storiesOf } from '@storybook/react';

import Thing from '../src/index';

storiesOf('Button', module)
  .add('with text', () => (
    <Thing />
  ));   