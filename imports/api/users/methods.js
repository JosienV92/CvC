import { Meteor } from 'meteor/meteor';
import { Users } from './collection';
import { Roles } from 'meteor/alanning:roles';

Meteor.methods({
  'users.insert': function(userId, data){
    const isAdmin = Roles.userIsInRole(userId, 'admin', Roles.GLOBAL_GROUP);
    if(isAdmin) {
      return Users.insert({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        address: data.address
      });
    }
  },
});
