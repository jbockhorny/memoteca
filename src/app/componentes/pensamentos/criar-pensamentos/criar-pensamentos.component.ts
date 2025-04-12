import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { IPensamento } from '../pensamento/pensamento';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css'],
})
export class CriarPensamentosComponent implements OnInit {
  pensamento: IPensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  };

  constructor(private service: PensamentoService, private router: Router) {}

  ngOnInit(): void {}

  public criarPensamento() {
    this.service
      .criar(this.pensamento)
      .subscribe(() => this.router.navigate(['/listarPensamento']));
  }

  public cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
}
