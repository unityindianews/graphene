import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  moduleId: module.id.replace("/dist/", "/src/")
})
export class AppComponent {
  title = 'app';
}
