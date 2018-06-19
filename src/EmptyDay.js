/**
 * Persian Calendar Picker Component
 *
 * Copyright 2016 Reza (github.com/rghorbani)
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */

'use strict';

const React = require('react');
const PropTypes = require('prop-types');
const { Text, TouchableOpacity, View } = require('react-native');

function EmptyDay(props) {
  const { styles } = props;
  return (
    <View style={styles.dayWrapper}>
      <View style={styles.dayButton}>
        <TouchableOpacity
          style={styles.dayButton}
        >
          <Text style={styles.dayLabel}>
            {''}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

EmptyDay.propTypes = {
  styles: PropTypes.shape({}),
  day: PropTypes.number,
  onPressDay: PropTypes.func,
};

module.exports = EmptyDay;
