import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-resume-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './resume-form.html',
  styleUrl: './resume-form.css',
  
})
export class ResumeForm {

  selectedFile!: File;

  score = 0;
  status = '';

  constructor(
    private http: HttpClient
  ) {}

  

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadResume() {

    if (!this.selectedFile) {
      alert('Please select a PDF file first');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post(
      'https://ai-resume-eowq.onrender.com/resume/upload',
      formData
    ).subscribe({

      next: (res: any) => {

        console.log('FULL RESPONSE:', res);

console.log("res.score =", res.score);
console.log("typeof =", typeof res.score);

this.score = res.score ?? 0;
        this.status = res.status;

        console.log('Score:', this.score);
        console.log('Status:', this.status);
      },

      error: (err) => {
        console.error('UPLOAD ERROR:', err);
      }

    });
  }
  
}