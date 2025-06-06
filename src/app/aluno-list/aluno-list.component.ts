import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../aluno.model';

@Component({
  selector: 'app-aluno-list',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './aluno-list.component.html',
})
export class AlunoListComponent {
  private service = inject(AlunoService);
  alunos: Aluno[] = [];
  displayedColumns = ['id', 'nome', 'nota'];

  constructor() {
    this.service.listar().subscribe(alunos => this.alunos = alunos);
  }
}