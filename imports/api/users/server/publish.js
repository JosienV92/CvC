import { Meteor } from 'meteor/meteor';
import { Users } from '../collection';

Meteor.publish('users', function (userId) {
  this.unblock();
  if(!this.userId) {
    this.ready();
    return false;
  }
  return Users.find();
});
