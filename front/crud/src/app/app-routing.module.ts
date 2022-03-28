import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVeiculoComponent } from "./components/add-veiculo/add-veiculo.component";
import { ListVeiculoComponent } from './components/list-veiculo/list-veiculo.component';
import { DetailVeiculoComponent } from './components/detail-veiculo/detail-veiculo.component';

const routes: Routes = [
  { path: '', redirectTo: 'veiculos', pathMatch: 'full' },
  { path: 'veiculos', component: ListVeiculoComponent },
  { path: 'veiculo/:id', component: DetailVeiculoComponent },
  { path: 'inserir', component: AddVeiculoComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
