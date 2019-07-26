Template.loginForm.onCreated(function(){
  this.showLoginForm = new ReactiveVar(false);
});

Template.loginForm.helpers({
  formVisible() {
    return Template.instance().showLoginForm.get();
  },
});

Template.loginForm.events({
  'click button[name="seeLoginButton"]': function (e, template) {
    template.showLoginForm.set(!template.showLoginForm.get());
  },
  'click button[name="logOutButton"]': function (e, template) {
    Meteor.logout();
  },
  'submit form.loginForm': function (e, template) {
    e.preventDefault();
    let userEmail = e.target.userEmail.value;
    let userPassword = e.target.userPassword.value;
    Meteor.loginWithPassword(userEmail, userPassword, function(error) {
      if (Meteor.user()) {
         FlowRouter.go('/');
      } else {
         console.log("ERROR: " + error.reason);
      }
   });
  },
});
