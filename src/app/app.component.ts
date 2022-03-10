import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  icons = [{
    class: 'fa-brands fa-facebook'
  },{
    class: 'fa-brands fa-twitter'
  },{
    class: 'fa-brands fa-linkedin'
  },{
    class: 'fa-brands fa-google'
  },{
    class: 'fa-brands fa-instagram'
  } ]
  title = 'TeachLeapApp';
}
