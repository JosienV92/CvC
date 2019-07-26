import Users from './collection';

Users.schema = new SimpleSchema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  address: {
    type: Object,
    blackbox: true,
    optional: true,
  },
  // eventsPresent: {
  //   type: Array,
  // },
});
