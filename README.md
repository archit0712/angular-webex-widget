# HOW-TO: embedding Webex Widget into angular

This repo shows a possible way to include webex widget into angular's component.

Key elements are:
- webex widget library loaded dynamically in component's ngOnInit to overcome angular issue when loading traditional js libraries
- stylesheet included into app/index.html
- component's webex widget element wrapped into fixed div height


## Test this project on your machine

Follow these instructions:

```
git clone https://github.com/abuzzi-cisco/angular-webex-widget.git
cd angular-webex-widget
npm install
ng serve
```

Please remember to update the accessToken inside the **webex-widget.component.ts**.<br />
AccessToken can be generated as per  https://developer.webex.com/docs/widgets instructions.


## Final results

This project outcome will allow you to embed webex widget inside angular's component:

Webex widget loading:
<img src="https://github.com/abuzzi-cisco/webex-widget/blob/main/angular-webex-widget-1of2.png" width="500"><br><br>

Space token error (you need to put valid token into webex-widget.component.ts)
<img src="https://github.com/abuzzi-cisco/webex-widget/blob/main/angular-webex-widget-2of2.png" width="500"><br>
