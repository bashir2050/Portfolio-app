import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

  educationList = [
  
    {
      degreeLevel: 'Master',
      year: '2016-2018',
      degreeTitle: 'Master of Science in Software Engineering',
      universityName: 'Mysore University',
      universityDescription: 'The University of Mysore was established on July 27, 1916. It is the sixth oldest in the country and the first in the state of Karnataka. Also, in a sense it is the first university of the country to be established outside the limits of the British India. The university was founded as a result of the efforts of the benevolent and visionary Maharaja of erstwhile Princely State of Mysore His Highness Shri Nalvadi Krishnaraja Wadiyar – IV (1884-1940), and the then Diwan Sir M. Visvesvaraya (1860-1962). It was the first University to be accredited by NAAC in 2000 with Five Star Status. The university is now ranked 19th in the India Rankings 2021, NIRF-MHRD, Government of India.'
    },
    {
      degreeLevel: 'Bachelor',
      year: '2011-2015',
      degreeTitle: 'Bachelor of Science in Computer Science',
      universityName: 'Simad University',
      universityDescription: 'SIMAD University is a private university in Mogadishu, Somalia. It offers undergraduate courses. It is the first non-profit university teaching in the Somali language.'
    },
    {
      degreeLevel: 'Certificate of Accomplishment',
      year: '2024-2025',
      degreeTitle: '.Net Full Stack Developer.',
      universityName: 'Humber College',
      universityDescription: 'Humber offers a specialized bridging program for internationally trained IT professionals with education and experience in computer programming and software development. This program is designed to provide participants with the advanced concepts, skills, and knowledge required to work as Software Developers. Not only will you acquire and develop technical skills, but also communication and interpersonal skills being sought after by employers in this field.You will be supported on your journey to employment by a sector specific employment advisor as well as a job developer to ensure that you develop your soft skills and build your employer connections so that you are well positioned to secure employment in the software development tech space upon graduation.'
    }
  ];

}
