import { Mongo } from 'meteor/mongo';

export const Users = new Mongo.Collection('users');

Users.allow({
  insert: function(userId) {
    return Roles.userIsInRole(userId, 'admin', Roles.GLOBAL_GROUP);
  },
  update: false,
  remove: function(userId) {
    return Roles.userIsInRole(userId, 'admin', Roles.GLOBAL_GROUP);
  },
});
