import { Component, signal } from '@angular/core';
import { ResumeForm } from './components/resume-form/resume-form';
import { RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-root',
    standalone: true,
  imports: [ResumeForm, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('resume-front');
}
