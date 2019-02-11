import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  models: string[] = [
    'Tf-idf',
    'Doc2Vec'
  ];
}
