import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
//import de componentes para a rota
import {HomeComponent} from "./views/home/home.component";
import {TarefaListComponent} from "./views/tarefa-list/tarefa-list.component";
import {TarefaCrudComponent} from "./views/tarefa-crud/tarefa-crud.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }, {
    path: "tarefas",
    component: TarefaCrudComponent
  }, {
    path: "tarefas-lista",
    component: TarefaListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
