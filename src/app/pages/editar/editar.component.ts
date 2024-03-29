import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../../models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})

export class EditarComponent implements OnInit{

  btnAcao: string = 'Editar!'
  btnTitulo: string = 'Editar Funcionario'
  funcionario!: Funcionario; /*a exclamação no final é paga garantir que ele vai ser recebido */

  constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute, private router: Router) {}  /*este construtor vamos fazer nossas injeções de dependencias com o nosso FuncionarioService obtendo os dados da nossa api backEnd*/

  ngOnInit(): void {  
   const id = Number(this.route.snapshot.paramMap.get('id')); /*aqui estamos pegando o id que está na url, o id que está na url é o id do funcionario que queremos editar, então vamos pegar esse id e passar para o nosso serviço para que ele possa buscar o funcionario que tem esse id e preencher o formulario de edição com os dados desse funcionario*/
   this.funcionarioService.GetFuncionario(id).subscribe(data => {
     this.funcionario = data.dados;
     
   });
  }

  updateFuncionario(funcionario: Funcionario){
    this.funcionarioService.UpdateFuncionario(funcionario).subscribe(data => {
      this.router.navigate(['/']);
    });
    /*crie no funcionario.services.ts o metodo UpdateFuncionario*
    para isso vamos copiar o metodo AddFuncionario e fazer as alterações necessárias para que ele faça um put ao invés de um post, e que ele receba um funcionario como parametro, e que ele faça um put para a nossa api, e que ele retorne um observable do tipo Response<Funcionario[]>*/
  }
}
