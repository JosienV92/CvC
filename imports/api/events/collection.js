import { Mongo } from 'meteor/mongo';

export const Events = new Mongo.Collection('events');

Events.allow({
  insert: function(userId) {
    return Roles.userIsInRole(userId, 'admin', Roles.GLOBAL_GROUP);
  },
  update: function(userId) {
    return Roles.userIsInRole(userId, 'admin', Roles.GLOBAL_GROUP);
  },
  remove: function(userId) {
    return Roles.userIsInRole(userId, 'admin', Roles.GLOBAL_GROUP);
  },
});
