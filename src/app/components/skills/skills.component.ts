import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  arrBooleans = [true, false, false];


  constructor() { }

  ngOnInit() {
  }

  setArrBooleans (position) {
    this.arrBooleans.forEach((e, index) => {
      if (index === position) {
        this.arrBooleans[index] = true;
      } else {
        this.arrBooleans[index]  = false;
      }
    });
    console.log(this.arrBooleans);
  }


}
