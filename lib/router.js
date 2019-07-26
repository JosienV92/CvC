FlowRouter.route('/', {
  name: 'Home',
  action: function(params, queryParams) {
    BlazeLayout.render('mainLayout', {
      main: 'home'
    });
  }
});


FlowRouter.route('/news', {
    name: 'News',
    action: function(params, queryParams) {
      BlazeLayout.render('mainLayout', {
        main: 'news'
      });
    }
});

FlowRouter.route('/events', {
    name: 'Calendar',
    action: function(params, queryParams) {
      BlazeLayout.render('mainLayout', {
        main: 'calendar'
      });
    }
});

FlowRouter.route('/contact', {
    name: 'Contact',
    action: function(params, queryParams) {
      BlazeLayout.render('mainLayout', {
        main: 'contact'
      });
    }
});
