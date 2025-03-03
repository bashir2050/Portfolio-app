import { Component } from '@angular/core';

import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-skills',
  imports: [ CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  languages = [
    { name: 'JavaScript', percentage: 90 },
    { name: 'Python', percentage: 80 },
    { name: 'Java', percentage: 70 },
    { name: 'C++', percentage: 60 },
    { name: 'C#', percentage: 85 },
    { name: 'Ruby', percentage: 75 },
    { name: 'PHP', percentage: 65 },
    { name: 'Swift', percentage: 70 },
    { name: 'Go', percentage: 50 },
    { name: 'Kotlin', percentage: 80 }
  ];
}

