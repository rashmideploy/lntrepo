import { Component } from '@angular/core';

@Component({
  selector: 'app-root',     //as element selector
  // selector: '.app-root',       //as claSS SElector
  // selector: '[app-root]',          //as a attribute selector
  // template: `'<h1>{{title}}</h1>'
  //             <hr/>
  //             <h2>Typescript</h2>`,
  templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LTI - Product Management App';
}
