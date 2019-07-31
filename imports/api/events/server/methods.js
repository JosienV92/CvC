import { Meteor } from 'meteor/meteor';
import { Events } from '../collection';
import { Roles } from 'meteor/alanning:roles';

Meteor.methods({
  'events.insert': (data) => {
    const isAdmin = Roles.userIsInRole(this.userId, 'admin', Roles.GLOBAL_GROUP);
    if(isAdmin) {
      return Events.insert({
        eventTitle: data.eventTitle,
        eventDateFrom: data.eventDateFrom,
        eventDateTo: data.eventDateTo,
        eventLocation: data.eventLocation
      });
    }
  },
});
