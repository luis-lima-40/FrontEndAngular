import { Component } from '@angular/core';
import { Funcionario } from '../../models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})

export class CadastroComponent {
btnAcao = "Cadastrar!";
btnTitulo = "Cadastro de Funcionário";

constructor(private funcionarioService : FuncionarioService, private router : Router ) { /*aqui vamor usar o Router fazendo uma injeção de dependencia router:Router */
  
}

  addFuncionario(funcionario:Funcionario){
    this.funcionarioService.AddFuncionario(funcionario).subscribe((data) =>{
      this.router.navigate(['/']); /*aqui estamos redirecionando para a pagina principal root sem rota apenas / */
      /*console.log(data)*/
    });
  }
}
