import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { allLowercase } from 'src/app/utils/validators/lowercase-validator';
import { PensamentoService } from './../pensamento.service';
@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css'],
})
export class EditarPensamentoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder // Removed lowercaseValidator from constructor
  ) {}

  ngOnInit(): void {
    // Inicialize o formulário vazio para evitar erros no template
    this.formulario = this.formBuilder.group({
      conteudo: [''],
      autoria: [''],
      modelo: [''],
      id: [null],
    });

    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.formulario = this.formBuilder.group({
        conteudo: [
          pensamento.conteudo,
          Validators.compose([
            Validators.required,
            Validators.pattern(/(.|\s)*\S(.|\s)*/),
          ]),
        ],

        autoria: [
          pensamento.autoria,
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            allLowercase,
          ]),
        ],
        modelo: [pensamento.modelo],
        id: [pensamento.id],
      });
    });
  }

  public editarPensamento() {
    this.service
      .editar(this.formulario.get('conteudo')?.value)
      .subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
  }

  public cancelar() {
    this.router.navigate(['/listarPensamento']);
  }

  public habilitarBotao() {
    return this.formulario.valid ? 'botao' : 'botao__desabilitado';
  }
}
