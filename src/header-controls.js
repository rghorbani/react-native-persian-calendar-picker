/**
 * Persian Calendar Picker Component
 *
 * Copyright 2016 Reza (github.com/rghorbani)
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */

'use strict';

const React = require('react');
const PropTypes = require('prop-types');
const { Platform, Text, View } = require('react-native');

const Utils = require('./utils');
const Controls = require('./controls');

function HeaderControls(props) {
  const {
    styles,
    currentMonth,
    currentYear,
    onPressNextMonth,
    onPressPreviousMonth,
    onPressNextYear,
    onPressPreviousYear,
    months,
    previousMonthTitle,
    nextMonthTitle,
    nextYearTitle,
    previousYearTitle,
    textStyle,
    headingLevel,
    isRTL,
  } = props;
  const MONTHS = months ? months : Utils.MONTHS; // English Month Array
  // getMonth() call below will return the month number, we will use it as the
  // index for month array in english
  const previousMonth = previousMonthTitle ? previousMonthTitle : (isRTL?'>':'<');
  const nextMonth = nextMonthTitle ? nextMonthTitle : (isRTL?'<':'>');
  const nextYear = nextYearTitle?nextYearTitle: (isRTL?'<<':'>>');
  const previousYear = previousYearTitle?previousYearTitle: (isRTL?'>>':'<<');
  const month = MONTHS[currentMonth];
  const year = currentYear;

  const accessibilityProps = { accessibilityRole: 'header' };
  if (Platform.OS === 'web') {
    accessibilityProps['aria-level'] = headingLevel;
  }

  return (
    <View style={styles.headerWrapper}>
      <Controls
        label={previousYear}
        onPressControl={onPressPreviousYear}
        styles={[styles.monthSelector,styles.prev]}
        textStyles={textStyle}
        />
      <Controls
        label={previousMonth}
        onPressControl={onPressPreviousMonth}
        styles={[styles.monthSelector, styles.prev]}
        textStyles={textStyle}
      />

      <View>
        <Text style={[styles.monthLabel, textStyle]} {...accessibilityProps}>
          {month} {year}
        </Text>
      </View>
      <Controls
        label={nextMonth}
        onPressControl={onPressNextMonth}
        styles={[styles.monthSelector, styles.next]}
        textStyles={textStyle}
      />
      <Controls
        label={nextYear}
        onPressControl={onPressNextYear}
        styles={[styles.monthSelector,styles.next]}
        textStyles={textStyle}
      />
    </View>
  );
}

HeaderControls.propTypes = {
  currentMonth: PropTypes.number,
  currentYear: PropTypes.number,
  onPressNextMonth: PropTypes.func,
  onPressPreviousMonth: PropTypes.func,
  onPressNextYear: PropTypes.func,
  onPressPreviousYear: PropTypes.func,
};

module.exports = HeaderControls;
