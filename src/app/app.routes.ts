

import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReferenceComponent } from './reference/reference.component';
import { EducationComponent } from './education/education.component';

export const routes: Routes = [
  { path: '', component:  NavbarComponent}, // Default route
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'exp', component: ExperienceComponent },
  { path: 'port', component: PortfolioComponent},
  { path: 'educ', component: EducationComponent},
  { path: 'ref', component: ReferenceComponent}, // About page
  { path: '**', redirectTo: '' } // Wildcard route (redirects unknown paths)
];