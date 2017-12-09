# react-native-calendar-picker
Persian Calendar Picker Component for React Native


This is a Persian Calendar Picker Component for React Native

To use the calendar you just need to:

	npm install react-native-persian-calendar-picker --save

How to use it:
```js
const React = require('react');
const {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View
} = require('react-native');

var PersianCalendarPicker = require('react-native-persian-calendar-picker');

class PersianCalendarPickerExample extends React.Component {
  constructor(props) {
		super(props);

    this.state = {
      date: new Date(),
    };

		(this: any).onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({ date: date });
  }

  render() {
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
}

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
