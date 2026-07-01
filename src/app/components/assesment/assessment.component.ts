import { Component } from '@angular/core';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent {

  questions = [
    {
      id: 1,
      question: 'What is Java?',
      options: ['Programming Language', 'Database', 'Operating System', 'Browser']
    },
    {
      id: 2,
      question: 'Which SQL command is used to retrieve data?',
      options: ['INSERT', 'UPDATE', 'SELECT', 'DELETE']
    }
  ];

  answers: { [key: number]: string } = {};

  submitAssessment() {
    console.log('Selected Answers:', this.answers);

    // Later send to Spring Boot API
    // this.http.post('/api/assessment/submit', this.answers)
  }
}