import {Component, OnInit} from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { VeiculoService } from 'src/app/services/veiculo.service';

 @Component({
  selector: 'app-list-veiculo',
  templateUrl: './list-veiculo.component.html',
  styleUrls: ['./list-veiculo.component.css']
})
export class ListVeiculoComponent implements OnInit{
  displayedColumns: string[] = ['id','ano','chassi','renavam','modelo','marca','placa', 'del'];
  dataSource = [];

  constructor(private svc: VeiculoService){}

  ngOnInit(): void {
    this.loadVeiculos();
  }

  deleteVeiculo(id: number) {
    this.svc.delete(id)
    .subscribe({
      next: (res:any) => {
        console.log(res);
        alert("Veículo removido.")
        this.loadVeiculos();
      },
      error: (e:any) => {
        e && e.error ? alert(e.error.text) : alert("Erro ao remover veículo.")
      }
    });
  }

  loadVeiculos() {
    this.svc.getAll()
      .subscribe({
        next: (res:any) => {
          console.log(res);
          this.dataSource = res;
        },
        error: (e:any) => {
          e && e.error ? alert(e.error.text) : alert("Erro ao ler lista de veículos.")
        }
    });
  }
}


/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */