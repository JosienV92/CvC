import Events from './collection';

Events.schema = new SimpleSchema({
  eventTitle: {
    type: String
  },
  eventDateFrom: {
    type: Date
  },
  eventDateTo: {
    type: Date
  },
  eventLocation: {
    type: String,
  },
});
