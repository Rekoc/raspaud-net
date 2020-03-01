import { Component, OnInit } from '@angular/core';

import { faGithubSquare, faStackOverflow, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public iconsList = [];

  constructor() { }

  ngOnInit(): void {
    this.iconsList[0] = faLinkedin;
    this.iconsList[1] = faGithubSquare;
    this.iconsList[2] = faStackOverflow;
  }

}
