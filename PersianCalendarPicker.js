/**
 * Persian Calendar Picker Component
 *
 * Copyright 2016 Reza (github.com/rghorbani)
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */

'use strict';

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
var moment = require('moment-jalaali');

var styles = require('./style');
var HeaderControls = require('./HeaderControls');
var WeekDaysLabels = require('./WeekDaysLabels');
var Days = require('./Days');

var PersianCalendarPicker = React.createClass({
  propTypes: {
    maxDate: React.PropTypes.instanceOf(Date),
    minDate: React.PropTypes.instanceOf(Date),
    selectedDate: React.PropTypes.instanceOf(Date).isRequired,
    onDateChange: React.PropTypes.func,
    screenWidth: React.PropTypes.number,
    weekdays: React.PropTypes.array,
    months: React.PropTypes.array,
    previousTitle: React.PropTypes.string,
    nextTitle: React.PropTypes.string,
    selectedDayColor: React.PropTypes.string,
    selectedDayTextColor: React.PropTypes.string,
    scaleFactor: React.PropTypes.number,
    textStyle: Text.propTypes.style
  },
  getDefaultProps() {
    return {
      onDateChange () {}
    };
  },
  getInitialState() {
    // if (this.props.scaleFactor !== undefined) {
    //   styles = StyleSheet.create(makeStyles(this.props.scaleFactor));
    // }
    var date = moment(this.props.selectedDate);
    // console.log(date.format('jYYYY/jMM/jDD'));
    return {
      date: date,
      day: date.jDate(),
      month: date.jMonth(),
      year: date.jYear(),
      selectedDay: []
    };
  },

  // Trigger date change if new props are provided.
  // Typically, when selectedDate is changed programmatically.
  //
  componentWillReceiveProps: function(newProps) {
    var date = moment(newProps.selectedDate);
    this.setState({
      date: date,
      day: date.jDate(),
      month: date.jMonth(),
      year: date.jYear(),
    });
  },

  onDayChange(day) {
    this.setState({day: day.day}, () => { this.onDateChange(); });
  },

  onMonthChange(month) {
    this.setState({month: month}, () => { this.onDateChange(); });
  },

  getNextYear(){
    this.setState({year: this.state.year + 1}, () => { this.onDateChange(); });
  },

  getPrevYear() {
    this.setState({year: this.state.year - 1}, () => { this.onDateChange(); });
  },

  onDateChange() {
    var {
      day,
      month,
      year,
    } = this.state;
    var date = moment(year+'/'+(month + 1)+'/'+day, 'jYYYY/jM/jD');
    var date2 = new Date(date.year(), date.month(), date.date());

    this.setState({date: date});
    this.props.onDateChange(date2);
  },

  render() {
    return (
      <View style={styles.calendar}>
        <HeaderControls
          maxDate={this.props.maxDate}
          minDate={this.props.minDate}
          year={this.state.year}
          month={this.state.month}
          onMonthChange={this.onMonthChange}
          getNextYear={this.getNextYear}
          getPrevYear={this.getPrevYear}
          months={this.props.months}
          previousTitle={this.props.previousTitle}
          nextTitle={this.props.nextTitle}
          textStyle={this.props.textStyle}
        />
        <WeekDaysLabels
          screenWidth={this.props.screenWidth}
          weekdays={this.props.weekdays}
          textStyle={this.props.textStyle}
        />
        <Days
          maxDate={this.props.maxDate}
          minDate={this.props.minDate}
          month={this.state.month}
          year={this.state.year}
          date={this.state.date}
          onDayChange={this.onDayChange}
          screenWidth={this.props.screenWidth}
          selectedDayTextColor={this.props.selectedDayTextColor}
          textStyle={this.props.textStyle}
        />
      </View>
    );
  },
});

module.exports = PersianCalendarPicker;
