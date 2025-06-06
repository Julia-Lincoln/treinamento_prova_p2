import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlunoService } from '../aluno.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Aluno } from '../aluno.model';

@Component({
  selector: 'app-aluno-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './aluno-form.component.html'
})
export class AlunoFormComponent {
  fb = inject(FormBuilder);
  service = inject(AlunoService);
  router = inject(Router);

  form = this.fb.group({
    nome: ['', Validators.required],
    nota: [0, [Validators.required, Validators.min(0), Validators.max(10)]]
  });

  salvar() {
    if (this.form.valid) {
      this.service.adicionar(this.form.getRawValue() as Omit<Aluno, 'id'>);
      alert('Aluno salvo!');
      this.router.navigate(['/']);
    }
  }
}