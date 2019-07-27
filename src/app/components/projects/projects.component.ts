import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  firstPorfolio_likes: number = 10;


  constructor() { }

  ngOnInit() {
  }

  giveLike(project) {
    if (project === 'myPortfolio') {
      console.log(project);
    }
  }

}
