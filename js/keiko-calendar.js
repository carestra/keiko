var app = angular.module('keikoEventCalendar', ['ui.calendar']);

app.controller("keikoEventCalendarController", function ($scope) {

  $scope.eventSources = [
    {
      // use https://console.developers.google.com/apis/dashboard to create/ad project and get API key
      googleCalendarApiKey: "AIzaSyDz_1KKNj7XxpbzEJMlA6IZSRwGZ9oP-5A",
      url: "https://www.google.com/calendar/feeds/rd4bmh5ob93ps4bsr3m65u3r7o@group.calendar.google.com/public/basic",
      className: 'gcal-event',           // an option!
      currentTimezone: 'Europe/Stockholm' // an option!
    }
  ];

  /* config object */
  $scope.uiConfig = {
    calendar: {
      height: 450,
      editable: false,
      header: {
        left: 'month basicWeek',
        center: 'title',
        right: 'today prev,next'
      }
    }
  };

  console.log($scope.uiConfig);
});
