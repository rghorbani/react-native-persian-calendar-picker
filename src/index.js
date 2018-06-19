/**
 * Persian Calendar Picker Component
 *
 * Copyright 2016 Reza (github.com/rghorbani)
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */

'use strict';

const React = require('react');
const PropTypes = require('prop-types');
const jMoment = require('moment-jalaali');
const { Text, View } = require('react-native');

const Days = require('./Days');
const HeaderControls = require('./HeaderControls');
const WeekDaysLabels = require('./WeekDaysLabels');
const styles = require('./style');

class PersianCalendarPicker extends React.Component {
  static propTypes = {
    maxDate: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    selectedDate: PropTypes.instanceOf(Date).isRequired,
    onDateChange: PropTypes.func,
    screenWidth: PropTypes.number,
    weekdays: PropTypes.array,
    months: PropTypes.array,
    previousTitle: PropTypes.string,
    nextTitle: PropTypes.string,
    selectedDayColor: PropTypes.string,
    selectedDayTextColor: PropTypes.string,
    scaleFactor: PropTypes.number,
    textStyle: Text.propTypes.style
  };

  constructor(props) {
    super(props);
    // if (this.props.scaleFactor !== undefined) {
    //   styles = StyleSheet.create(makeStyles(this.props.scaleFactor));
    // }
    let date = jMoment(this.props.selectedDate);
    // console.log(date.format('jYYYY/jMM/jDD'));
    this.state = {
      date: date,
      day: date.jDate(),
      month: date.jMonth(),
      year: date.jYear(),
      selectedDay: []
    };

    this.onDayChange = this.onDayChange.bind(this);
    this.onMonthChange = this.onMonthChange.bind(this);
    this.getNextYear = this.getNextYear.bind(this);
    this.getPrevYear = this.getPrevYear.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
  }

  // Trigger date change if new props are provided.
  // Typically, when selectedDate is changed programmatically.
  //
  componentWillReceiveProps(newProps) {
    let date = jMoment(newProps.selectedDate);
    this.setState({
      date: date,
      day: date.jDate(),
      month: date.jMonth(),
      year: date.jYear(),
    });
  }

  onDayChange(day) {
    this.setState({day: day.day}, () => { this.onDateChange(); });
  }

  onMonthChange(month) {
    this.setState({month: month}, () => { this.onDateChange(true); });
  }

  getNextYear(){
    this.setState({year: this.state.year + 1}, () => { this.onDateChange(true); });
  }

  getPrevYear() {
    this.setState({year: this.state.year - 1}, () => { this.onDateChange(true); });
  }

  onDateChange(noEmit) {
    let {
      day,
      month,
      year,
    } = this.state;
    let date = jMoment(year + '/' + (month + 1) + '/' + day, 'jYYYY/jM/jD');
    let date2 = new Date(date.year(), date.month(), date.date());

    this.setState({date: date});
    // There's no need to force the parent component to change the date when we're changing the month / year
    if (!noEmit) {
      this.props.onDateChange(date2);
    }
  }

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
          selectedDayColor={this.props.selectedDayColor}
          textStyle={this.props.textStyle}
        />
      </View>
    );
  }
}

module.exports = PersianCalendarPicker;
