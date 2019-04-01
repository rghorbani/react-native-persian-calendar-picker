/**
 * Persian Calendar Picker Component
 *
 * Copyright 2016 Reza (github.com/rghorbani)
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */

'use strict';

const React = require('react');
const PropTypes = require('prop-types');
const { Text, TouchableOpacity } = require('react-native');

function Controls({ styles, textStyles, label, onPressControl }) {
  return (
    <TouchableOpacity onPress={() => onPressControl()}>
      <Text style={[styles, textStyles]}>{label}</Text>
    </TouchableOpacity>
  );
}

Controls.propTypes = {
  styles: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  onPressControl: PropTypes.func.isRequired,
};

module.exports = Controls;
