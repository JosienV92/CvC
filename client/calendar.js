import './calendar.html';
import { Events } from '../imports/api/events';

Template.calendar.helpers({
  eventList() {
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
    return Events.find();
  },
});
