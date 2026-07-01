

import { Routes } from '@angular/router';
import { AssessmentComponent } from './components/assesment/assessment.component';
import { ResumeForm } from './components/resume-form/resume-form';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'resume-form',
    pathMatch: 'full'
  },
  {
    path: 'resume-form',
    component: ResumeForm
  },
  {
    path: 'assessment',
    component: AssessmentComponent
  }
];
