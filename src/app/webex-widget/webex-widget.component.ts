import { Component, OnInit } from '@angular/core';

declare var webex: any;

@Component({
  selector: 'app-webex-widget',
  templateUrl: './webex-widget.component.html',
  styleUrls: ['./webex-widget.component.css'],
})
export class WebexWidgetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var el = document.createElement('script');
    el.onload = () => {
      var widgetEl = document.getElementById('my-webex-widget');

      webex.widget(widgetEl).spaceWidget({
        accessToken:
          'MGYxNjE5MjYtZDVkNS00YWFjLWE4ZTQtNmI2MTkyMjI4NjA4OTVjN2Y5M2UtYTYw_P0A1_4f5586f0-3d94-4079-b73f-850055a38a9d',
        destinationId: 'mittalarc2001@gmail.com',
        destinationType: 'email',
        spaceActivities: {
          files: true,
          meet: true,
          message: true,
          people: true,
        },
        initialActivity: 'people',
        secondaryActivitiesFullWidth: false,
        composerActions: {
          files: true,
          meet: true,
          message: true,
          people: true,
        },
      });
    };
    el.src = 'https://code.s4d.io/widget-space/production/bundle.js';
    document.getElementsByTagName('head')[0].append(el);
  }
}
