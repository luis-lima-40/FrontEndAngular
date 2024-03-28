import { Component } from '@angular/core';
import { Funcionario } from '../../models/Funcionarios';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  createFuncionario(funcionario:Funcionario){}
}
