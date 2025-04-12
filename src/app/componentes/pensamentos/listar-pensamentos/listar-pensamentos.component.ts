import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { IPensamento } from '../pensamento/pensamento';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css'],
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos: IPensamento[] = [];

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service
      .listar()
      .subscribe((pensamentos) => (this.listaPensamentos = pensamentos));
  }
}
