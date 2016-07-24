/**
 * Persian Calendar Picker Component
 *
 * Copyright 2016 Reza (github.com/rghorbani)
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */

'use strict';

import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

var {
  WEEKDAYS,
  MONTHS,
  MAX_ROWS,
  MAX_COLUMNS,
  getDaysInMonth
} = require('./util');