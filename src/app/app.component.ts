import { Component } from '@angular/core';
import { Result } from './result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  result: Result;

  onGotPoints(result: Result): void {
    this.result = result;
  }
}
