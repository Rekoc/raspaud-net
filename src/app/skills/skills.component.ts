import { Component, OnInit } from '@angular/core';

import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public iconsList = [];

  constructor() { }

  ngOnInit(): void {
    this.iconsList[0] = faStar;
    this.iconsList[1] = faStarHalf;
  }

}
