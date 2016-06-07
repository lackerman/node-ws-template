'use strict';

require('spectre.css/dist/spectre.min.css');
require('./styles/main.css');

import React from 'react';
import { render } from 'react-dom';
import People from './scripts/main';

render(
  <People pollInterval={1000} />,
  document.querySelector('#people')
);
