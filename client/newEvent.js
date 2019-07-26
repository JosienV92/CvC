import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

Template.newEvent.helpers({
  DayPicker() {
    return DayPicker;
  },
});
