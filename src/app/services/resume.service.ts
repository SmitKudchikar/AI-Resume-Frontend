import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:8081/resume';

  analyzeResume(resumeText: string) {
    return this.http.post(
      `${this.apiUrl}/analyze`,
      { resumeText }
    );
  }

  getAllResumes() {
    return this.http.get(
      `${this.apiUrl}/all`
    );
  }
}