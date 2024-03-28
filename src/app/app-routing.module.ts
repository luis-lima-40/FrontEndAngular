import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';

/*neta lista que é gerada inicialmente vazia, é onde vamos colocar todas as nossas rotas, ela recebe objetos, vamos criar uma rota para cadastro e assim por diante*/
const routes: Routes = [
{path: 'cadastro', component: CadastroComponent},
{path: '', component: HomeComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
