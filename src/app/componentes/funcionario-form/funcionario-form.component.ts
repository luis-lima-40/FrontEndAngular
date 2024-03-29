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
    @Input() dadosFuncionario: Funcionario | null = null ; /* neste caso não podemos por a exclamação no final, ao 
    invez disso vamos dizer que ele pode receber um funcionario ou apenas nulo  | null*, atualmente ele recebe como 
    padrão null porque estamos reaproveitando o formulario, pois quando usamos para cadastrar ele não recebe os 
    dados de funcionario, esta nulo pois não tem dados para receber na pagina cadastrar ja na pagina editar vamos
     enviar dados carregados da pagina inicial, para isso precisamos declarar dessa forma, já no forGroup abaixo, vamos
     fazer uma verificação para saber se o dadosFuncionario é nulo ou não, se for nulo significa que a pessoa clicou no
     botão de cadastrar, se não for nulo significa que a pessoa clicou no botão de editar, ou seja quando clicar o editar
     os campos vão ser preenchidos com o funcionario carregado da pagina inicial, e quando clicar no cadastrar os campos
     vao ficar vazios para preencher com os dados do novo funcionario que vai ser cadastrado
    
    */

    funcionarioForm!: FormGroup;

  constructor() {}

  /*gOnInit Vai ser realizado a partir do momento que carrega a pagina*/
  ngOnInit(): void {
   
    this.funcionarioForm = new FormGroup({
      // se vc tentar cadastar um funcionario sem preencher os dados, acontecera um erro, para isso vamos usar o Validators.required
      id: new FormControl(this.dadosFuncionario? this.dadosFuncionario.id : 0),
      nome: new FormControl(this.dadosFuncionario? this.dadosFuncionario.nome: '', [Validators.required]), /*--tem alguma coisa no dadosFuncionario? se tem dados estou é porque cliquei no botão editar, se não tiver é porque cliquei no botão cadastrar*/
      sobrenome: new FormControl(this.dadosFuncionario? this.dadosFuncionario.sobrenome: '', [Validators.required]),
      departamento: new FormControl(this.dadosFuncionario? this.dadosFuncionario.departamento: '', [Validators.required]),
      turno: new FormControl(this.dadosFuncionario? this.dadosFuncionario.turno: '', [Validators.required]),
      ativo: new FormControl(this.dadosFuncionario? this.dadosFuncionario.ativo : true),
      dataDeCriacao: new FormControl(new Date()),
      dataDeAlteracao: new FormControl(new Date())

    });

 
    
  }

  submit(){
    /*console.log(this.funcionarioForm.value)*/

    this.onSubmit.emit(this.funcionarioForm.value);

  }
}
