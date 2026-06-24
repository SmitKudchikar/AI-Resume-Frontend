import { Component, signal } from '@angular/core';
import { ResumeForm } from './components/resume-form/resume-form';


@Component({
  selector: 'app-root',
    standalone: true,
  imports: [ResumeForm],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('resume-front');
}
