/**
 * Persian Calendar Picker Component
 *
 * Copyright 2016 Reza (github.com/rghorbani)
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */

'use strict';

const React = require('react');
const {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} = require('react-native');

var {
  WEEKDAYS,
  MONTHS,
  MAX_ROWS,
  MAX_COLUMNS,
  getDaysInMonth
} = require('./util');
