import { Routes } from '@angular/router';
import { AlunoListComponent } from './aluno-list/aluno-list.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

export const routes: Routes = [
  { path: '', component: AlunoListComponent },
  { path: 'novo', component: AlunoFormComponent },
];