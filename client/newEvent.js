Template.newEvent.onRendered(function () {
  const template = this;

  Tracker.afterFlush(() => {
    $('.eventDateTo').datepicker({
      days: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
      daysShort: ['zon', 'maa', 'din', 'woe', 'don', 'vrij', 'zat'],
      daysMin: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
      months: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
      monthsShort: ['jan', 'feb', 'maa', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
      today: 'Vandaag',
      clear: 'Annuleren',
      format: 'dd/mm/yyyy',
      weekStart: 1
    });
    //
    // $.fn.datepicker.dates.nl = {
    //   days: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
    //   daysShort: ['zon', 'maa', 'din', 'woe', 'don', 'vrij', 'zat'],
    //   daysMin: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
    //   months: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
    //   monthsShort: ['jan', 'feb', 'maa', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
    //   today: 'Vandaag',
    //   clear: 'Annuleren',
    //   format: 'dd/mm/yyyy',
    //   weekStart: 1
    // };

  });

});

// Template.newEvent.events();
