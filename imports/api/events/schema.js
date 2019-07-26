import Events from './collection';

Events.schema = new SimpleSchema({
  name: {
    type: String
  },
  date: {
    type: String
  },
  location: {
    type: Object,
    blackbox: true,
  },
});
