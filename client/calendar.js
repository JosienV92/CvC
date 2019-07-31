import './calendar.html';
import { Events } from '../imports/api/events';

Template.calendar.onRendered(function() {
  Tracker.autorun(() => {
    Meteor.subscribe('events');
  });
});

Template.calendar.helpers({
  eventList() {
    let foundEvents = Events.findOne({});
    // const events = [
    //   {
    //     name: 'Cannenburgh',
    //     place: 'Vaassen',
    //     date: '23-24 augustus',
    //   },
    //   {
    //     name: 'Kasteel de Kelder',
    //     place: 'Doetinchem',
    //     date: '1-2 juni',
    //   }
    // ];
    console.log('foundEvents', foundEvents);
    return foundEvents;
  },
});
