import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  myColor = 'purple';

  myCSSClass = "red";
  applyCssClass = false;

  customName: string = "peter";

  userName: string = "Mase";
  
  appName = "My first app in Angular 11";

  constructor() { }

  ngOnInit(): void {
  }

  showData($event: any) {
    console.log("button isclicked!"); if($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }

}
