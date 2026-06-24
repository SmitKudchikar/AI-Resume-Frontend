import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../services/resume.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resume-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './resume-form.html',
  styleUrl: './resume-form.css',
})
export class ResumeForm {

  feedback = '';
  selectedFile!: File;
  resumeContent = '';
  score = 0;

  constructor(
    private resumeService: ResumeService,
    private http: HttpClient
  ) {}



  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

uploadResume() {

  if (!this.selectedFile) {
    alert("Please select a PDF file first");
    return;
  }

  const formData = new FormData();
  formData.append("file", this.selectedFile);

  this.http.post(
    "https://ai-resume-eowq.onrender.com/resume/upload",
    formData
  ).subscribe({

    next: (res: any) => {

      console.log("FULL RESPONSE:", res);

      this.feedback = res.feedback || "";
      this.resumeContent = res.resumeText || "";

      console.log("Feedback:");
      console.log(this.feedback);

      const match = this.feedback.match(/Resume Score:\s*(\d+)/);

      console.log("Match:", match);

      if (match) {
        this.score = Number(match[1]);
        console.log("Score:", this.score);
      } else {
        console.log("Score not found in feedback");
      }
    },

    error: (err) => {
      console.error("UPLOAD ERROR:", err);
    }

  });

}
}
