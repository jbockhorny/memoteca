import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos = [
    {
    conteudo:  'Passo informações para o componente filho',
    autoria: 'Componente pai',
    modelo: 'modelo3'
  },
  {
    conteudo:  'Minha propriedade é decorada com @Input()',
    autoria: 'Componente filho',
    modelo: 'modelo2'
  },
  {
    conteudo:  'ruihguefgbuenfienbfie fiehnfiefmpowkfpwfmpfkw owfkpwkfwfpwfpwmfpwfmpwfm,a.dpwm wifjifniernfienfowemnfowekfmpomowfmowmfow nfurbgurgniremfpwmcfowmfiwmnfiw wfnuwnfowdfmopwmcifwenfgvuiwgfnurbvurnvowmcomowmcioe bnfuernvormvorenvirui 2851892056298mvirengviernv irenigernfownfiwnfiwnoewfnorinfguirnuir',
    autoria: 'Joanilza',
    modelo: 'modelo1'
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
