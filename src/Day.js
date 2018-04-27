/**
 * Persian Calendar Picker Component
 *
 * Copyright 2016 Reza (github.com/rghorbani)
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */

'use strict';

const React = require('react');
const PropTypes = require('prop-types');
const {
  Text,
  TouchableOpacity,
  View,
} = require('react-native');

const styles = require('./style');

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
  };

  constructor(props) {
    super(props);

    this.DAY_WIDTH = (this.props.screenWidth - 16) / 7;
    this.SELECTED_DAY_WIDTH = (this.props.screenWidth - 16) / 7 - 10;
    this.BORDER_RADIUS = this.SELECTED_DAY_WIDTH / 2;

    this.onDayChange = this.onDayChange.bind(this);
  }

  render() {
    let textStyle = this.props.textStyle;
    if (this.props.selected) {
      let selectedDayColorStyle = this.props.selectedDayColor ? {backgroundColor: this.props.selectedDayColor} : {};
      let selectedDayTextColorStyle = this.props.selectedDayTextColor ? {color: this.props.selectedDayTextColor} : {};
      return (
        <View style={styles.dayWrapper}>
          <View style={[styles.dayButtonSelected, selectedDayColorStyle]}>
            <TouchableOpacity
              style={styles.dayButton}
              onPress={() => this.onDayChange() }
            >
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
              onPress={() => this.onDayChange()}
            >
              <Text style={[styles.dayLabel, textStyle]}>
                {this.props.day}
              </Text>
            </TouchableOpacity>
          </View>
        );
      }
    }
  }

  onDayChange() {
    this.props.onDayChange && this.props.onDayChange(this.props.day);
  }
}

module.exports = Day;
