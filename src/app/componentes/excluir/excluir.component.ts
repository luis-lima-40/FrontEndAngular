import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionarioService } from '../../services/funcionario.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Funcionario } from '../../models/Funcionarios';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrl: './excluir.component.css'
})
export class ExcluirComponent implements OnInit{

  inputdata: any;
  funcionario!: Funcionario

  constructor( 
    private FuncionarioService: FuncionarioService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
    ){}

  ngOnInit(): void {
    this.inputdata = this.data;


    this.FuncionarioService.GetFuncionario(this.inputdata.id).subscribe((funcionario) =>{
      this.funcionario = funcionario.dados;

console.log(this.data)
    })
  }

}

