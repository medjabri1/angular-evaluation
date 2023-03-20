import { Component } from '@angular/core';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bank Management';

  ngOnInit() {
    console.log("uuid: "+ uuidv4());
  }
}
