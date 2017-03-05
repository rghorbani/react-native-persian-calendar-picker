# react-native-calendar-picker
Persian Calendar Picker Component for React Native


This is a Persian Calendar Picker Component for React Native

Heavily inspired by [stephy's CalendarPicker](https://github.com/stephy/CalendarPicker)

To use the calendar you just need to:

	npm install react-native-persian-calendar-picker --save

How to use it:
```js
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';

var PersianCalendarPicker = require('react-native-persian-calendar-picker'),
    PersianCalendarPicker2;

PersianCalendarPicker2 = React.createClass({
  getInitialState: function() {
    return {
      date: new Date(),
    };
  },

  onDateChange: function(date) {
    this.setState({ date: date });
  },

  render: function() {
    return (
      <View style={styles.container}>

        <PersianCalendarPicker
          selectedDate={this.state.date}
          onDateChange={this.onDateChange}
          screenWidth={Dimensions.get('window').width}
          selectedBackgroundColor={'#5ce600'} />

        <Text style={styles.selectedDate}> Date: { this.state.date.toString() } </Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  selectedDate: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#000',
  }
});
```
## CalendarPicker props
| Prop | Type | Description |
:------------ |:---------------:| :-----|
| weekdays | array | List of week days. Eg. ['Mo', 'Tue', ...] Must be 7 days |
| months | array | List of months names. |
| previousTitle | string | Title of button for previous month. |
| nextTitle | string | Title of button for next month. |
| selectedDayColor | string | Color for selected day |
| textStyle | object | Style overall text. Change fontFamily, color, etc. |


# To Do:

- Add swipe gestures


# Suggestions?

Drop an email to r.ghorbani.f@gmail.com

Open issues

Submit PRs.
