import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tableConfig = {
    "page_id" : 1,
    "ps": 10,
    "pn": 1    
  };

  rowSelected(row) {
    console.log(row)
  }
}
