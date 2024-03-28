import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../models/Funcionarios';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit { /*OnInit é um ciclo de vida do angular, quando o componente é criado, ele executa o que esta dentro do ngOnInit*/

  funcionarios: Funcionario[] = []; /*Array de funcionarios, que é um array de objetos que tem as propriedades que estão no model Funcionarios.ts*/
  funcionariosGeral: Funcionario[] = []; /*Array de funcionariosGeral, que vai pegar o array Funcionario[] para verificar quais deles estão ativos ou inativos dentro do array verificando quem esta com status ativo true ou false e preenchendo este funcionariosGeral com o resultado que vai ser usado no imput de busca, de procurar */
  
  constructor(private funcionarioService: FuncionarioService){}

  ngOnInit(): void { /*Quando o componente é criado, ele executa o que esta dentro do ngOnInit, aqui a primeira coisa a ser executada é um get para mostrar todos os funcionarios da nossa tabela quando carregar a pagina buscar funcionarios*/
    this.funcionarioService.GetFuncionarios().subscribe(data =>{ /*Data é p response completo, o dados é as informações do funcionario que está dentro do data */
      const dados = data.dados; /*dados é uma lista de funcionarios que está dentro do data, como é uma lista eu posso criar um Map que é basicamente passar por cada um dos itens dentro dessa lista */
      /*console.log(data);*/

      dados.map((item) => { //aqui estamos varrendo a lista, o array por cada um dos itens da lista para que eu posso modificar a data de criação e data de modificação deles.
        item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString('pr-BR') //passando por cada item da lista e formatando o campo data para exibir nesse estilo curto sem o horário
        item.dataDeAlteracao = new Date(item.dataDeAlteracao!).toLocaleDateString('pr-BR')
      })

      this.funcionarios = data.dados;
      this.funcionariosGeral = data.dados;

    });
  }

search(event : Event){ //este search é para ser usando no totão buscar que está no home.component.html   <input type="text" placeholder="Qual Registro está buscando?" (input)="search($event)">
  const target = event.target as HTMLInputElement;
  const value = target.value.toLocaleLowerCase();

  /*funcionariosGeral é tudo que tem no banco, porem estou setando para a variavel funcionarios somente o dado que esta filtrado no funcionariosGeral, por isso criamos essas duas variaveis, as duas recebem tudo que tem no banco, e uma delas recebe o dado filtrado conforme vamos escrevendo no campo buscar que estamos digitando na tela e capturando com a função search*/
  this.funcionarios = this.funcionariosGeral.filter(funcionario =>{ 
    return funcionario.nome.toLowerCase().includes(value);
  })
}

}
