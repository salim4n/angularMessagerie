import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-component-left',
  templateUrl: './component-left.component.html',
  styleUrls: ['./component-left.component.css']
})
export class ComponentLeftComponent implements OnInit {
 personnes = ['Jean', 'Pierre', 'Paul', 'Jacques'];
  constructor() { }

  ngOnInit(): void {
  }

}
