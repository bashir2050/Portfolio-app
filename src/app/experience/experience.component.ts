import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  
  jobs = [
    {
      company: 'Google',
      year: '2020 - 2023',
      title: 'Software Engineer',
      description: 'Results-driven .NET Full Stack Developer with 5+ years of experience in designing, developing, and deploying scalable web applications. Proficient in ASP.NET Core, C#, Angular/React, SQL Server, and Azure/AWS. Strong expertise in RESTful API development, microservices architecture, multithreading, and cloud integration. Passionate about building high-performance, secure, and maintainable applications in agile environments.'
    },
    {
      company: 'Microsoft',
      year: '2017 - 2020',
      title: 'Backend Developer',
      description: 'Results-driven Back-End Developer with expertise in designing, developing, and maintaining scalable web applications. Proficient in building robust APIs, managing databases, and optimizing system performance. Adept at working with technologies such as ASP.NET Core, Spring Boot, SQL, Apache Kafka, and multithreading to deliver high-performance enterprise solutions. Passionate about creating efficient, secure, and maintainable back-end systems.'
    },
    {
      company: 'Amazon',
      year: '2015 - 2017',
      title: 'Data Engineer',
      description: 'Results-driven Data Engineer with expertise in designing, building, and optimizing scalable data pipelines and architectures. Proficient in ETL processes, database management, and cloud-based data solutions. Adept at working with big data technologies, ensuring data integrity, and improving system performance for enterprise applications.'
    }
  ];

}
