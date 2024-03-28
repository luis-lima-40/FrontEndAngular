import { Component } from '@angular/core';
import { Funcionario } from '../../models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})

export class CadastroComponent {


constructor(private funcionarioService : FuncionarioService) {
  
}

  addFuncionario(funcionario:Funcionario){
    this.funcionarioService.AddFuncionario(funcionario).subscribe((data) =>{
      console.log(data)
    });
  }
}
