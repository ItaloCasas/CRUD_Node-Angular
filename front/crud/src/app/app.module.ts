import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVeiculoComponent } from './components/add-veiculo/add-veiculo.component';
import { ListVeiculoComponent } from './components/list-veiculo/list-veiculo.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'  

@NgModule({
  declarations: [
    AppComponent,
    AddVeiculoComponent,
    ListVeiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
