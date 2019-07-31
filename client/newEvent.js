import {Events} from "../imports/api/events";

Template.newEvent.events({
  'change input.eventDateFrom': function(e, template){
    e.preventDefault();
    const dateFns = require('date-fns');
    let dayAfter = dateFns.addDays(new Date(e.target.value), 1);
    let dayAfterFormatted = dateFns.format(new Date(dayAfter),'YYYY-MM-DD');
    $('input.eventDateTo').val(dayAfterFormatted);
  },
  'submit form.eventForm': function (e, template) {
    e.preventDefault();
    let form = template.firstNode;
    let formFields = {
      eventTitle: form.children[1].value,
      eventDateFrom: new Date(form.children[2].children[1].value),
      eventDateTo: new Date(form.children[2].children[3].value),
      eventLocation: form.children[4].value
    };
    const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin', Roles.GLOBAL_GROUP);
    if(isAdmin) {
      return Events.insert({
        eventTitle: formFields.eventTitle,
        eventDateFrom: formFields.eventDateFrom,
        eventDateTo: formFields.eventDateTo,
        eventLocation: formFields.eventLocation
      });
    } else {
      console.log('no admin');
    }
  },
});
