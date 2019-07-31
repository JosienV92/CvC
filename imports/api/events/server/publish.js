import { Meteor } from 'meteor/meteor';
import { Events } from '../collection';

Meteor.publish('events', function () {
  return Events.find({});
});
