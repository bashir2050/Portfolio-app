import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { AboutComponent } from "./about/about.component";
import { SkillsComponent } from "./skills/skills.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ReferenceComponent } from './reference/reference.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, AboutComponent, SkillsComponent, PortfolioComponent, ExperienceComponent,EducationComponent,ReferenceComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
