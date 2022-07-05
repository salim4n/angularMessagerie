import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-reader',
  templateUrl: './component-reader.component.html',
  styleUrls: ['./component-reader.component.css']
})
export class ComponentReaderComponent implements OnInit {

  personnes = ['Jean', 'Pierre'];

  tabDates = ['01/01/2020', '02/02/2020'];
  date1 = new Date(1990, 3, 15);
  date2 = new Date(2010, 6, 28);
  date3 = new Date(2020, 4, 1);
  date4 = new Date(2021, 12, 24);
  constructor() { }

  ngOnInit(): void {
  }

}
