import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Funcionario } from '../../models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';



@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrl: './funcionario-form.component.css'
})

export class FuncionarioFormComponent implements OnInit{

    @Output() onSubmit = new EventEmitter<Funcionario>();
    @Input() btnAcao!: string;
    @Input() btnTitulo!: string;

    funcionarioForm!: FormGroup;

  constructor() {}

  /*gOnInit Vai ser realizado a partir do momento que carrega a pagina*/
  ngOnInit(): void {
    this.funcionarioForm = new FormGroup({
      // se vc tentar cadastar um funcionario sem preencher os dados, acontecera um erro, para isso vamos usar o Validators.required
      id: new FormControl(0),
      nome: new FormControl('', [Validators.required]),
      sobrenome: new FormControl('', [Validators.required]),
      departamento: new FormControl('', [Validators.required]),
      turno: new FormControl('', [Validators.required]),
      ativo: new FormControl(true),
      dataDeCriacao: new FormControl(new Date()),
      dataDeAlteracao: new FormControl(new Date())

    });

 
    
  }

  submit(){
    /*console.log(this.funcionarioForm.value)*/

    this.onSubmit.emit(this.funcionarioForm.value);

  }
}
