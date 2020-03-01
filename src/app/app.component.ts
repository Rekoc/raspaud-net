import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Services
import { ContentfulService } from './angular-contentful/contentful.service';

// Components
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'raspaud-net';
  slideName: string = 'index';

  constructor(private contentfulService: ContentfulService, private modalService: NgbModal) {
    // Create the Contentful client before downloading anything
    // this.contentfulService.createContentfulClient('0o5b4qwf9vty', 'xaO5nl7HTYREVWzkizsDI2tRzu20ndNsr7pZMYhE3_M');
  }

  ngOnInit() {

  }

  get _(): string {
    return this.slideName;
  }

  setSlide(newSlide) {
    this.slideName = newSlide;
  }
}
