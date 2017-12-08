/**
 * Persian Calendar Picker Component
 *
 * Copyright 2016 Reza (github.com/rghorbani)
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

var styles = require('./style');

class Day extends React.Component {

  static propTypes = {
    date: PropTypes.object,
    onDayChange: PropTypes.func,
    maxDate: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    selected: PropTypes.bool,
    day: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]).isRequired,
    screenWidth: PropTypes.number,
    startFromMonday: PropTypes.bool,
    selectedDayColor: PropTypes.string,
    selectedDayTextColor: PropTypes.string,
    textStyle: Text.propTypes.style
  }

  constructor(props) {
    
      super(props)
      this.state = this.initState()
  }

  initState () {
    this.DAY_WIDTH = (this.props.screenWidth - 16) / 7;
    this.SELECTED_DAY_WIDTH = (this.props.screenWidth - 16) / 7 - 10;
    this.BORDER_RADIUS = this.SELECTED_DAY_WIDTH / 2;
    return null;
  }

  render() {
    var textStyle = this.props.textStyle;
    if (this.props.selected) {
      var selectedDayColorStyle = this.props.selectedDayColor ? {backgroundColor: this.props.selectedDayColor} : {};
      var selectedDayTextColorStyle = this.props.selectedDayTextColor ? {color: this.props.selectedDayTextColor} : {};
      return (
        <View style={styles.dayWrapper}>
          <View style={[styles.dayButtonSelected, selectedDayColorStyle]}>
            <TouchableOpacity
              style={styles.dayButton}
              onPress={() => this.props.onDayChange(this.props.day) }>
              <Text style={[styles.dayLabel, textStyle, selectedDayTextColorStyle]}>
                {this.props.day}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      if (this.props.date < this.props.minDate || this.props.date > this.props.maxDate) {
        return (
          <View style={styles.dayWrapper}>
            <Text style={[styles.dayLabel, textStyle, styles.disabledTextColor]}>
              {this.props.day}
            </Text>
          </View>
        );
      } else {
        return (
          <View style={styles.dayWrapper}>
            <TouchableOpacity
            style={styles.dayButton}
            onPress={() => this.props.onDayChange(this.props.day) }>
              <Text style={[styles.dayLabel, textStyle]}>
                {this.props.day}
              </Text>
            </TouchableOpacity>
          </View>
        );
      }
    }
  }

}

module.exports = Day;
