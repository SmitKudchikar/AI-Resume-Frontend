import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResumeForm } from "./components/resume-form/resume-form";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ResumeForm],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
}