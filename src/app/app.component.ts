import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  clicked:any = [{"Home": false},{"Product Page": false},{"About me":false}, {"": false}];
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

  constructor(){}

  clickAction(e: any){
    console.log(e);
    // this.clicked[e.target.innerHTML] = true;

    switch(e.target.innerHTML){
      case "Home":
        this.clicked[0] = true;
        this.clicked[1] = false;
        this.clicked[2] = false;
        this.clicked[3] = false;
        break;
      case "Product Page":
        this.clicked[0] = false;
        this.clicked[1] = true;
        this.clicked[2] = false;
        this.clicked[3] = false;
        break;
      case "About me":
        this.clicked[0] = false;
        this.clicked[1] = false;
        this.clicked[2] = true;
        this.clicked[3] = false;
        break;
      case "":
        this.clicked[0] = false;
        this.clicked[1] = false;
        this.clicked[2] = false;
        this.clicked[3] = true;
        break;
    }

  }
}
