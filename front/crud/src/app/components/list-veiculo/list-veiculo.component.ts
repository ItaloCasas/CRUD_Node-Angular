import {Component, OnInit} from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { VeiculoService } from 'src/app/services/veiculo.service';
import { Router } from '@angular/router';

 @Component({
  selector: 'app-list-veiculo',
  templateUrl: './list-veiculo.component.html',
  styleUrls: ['./list-veiculo.component.css']
})
export class ListVeiculoComponent implements OnInit{
  displayedColumns: string[] = ['id','ano','chassi','renavam','modelo','marca','placa', 'del', 'edit'];
  dataSource = [];

  constructor(private svc: VeiculoService, private router: Router){}

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
        this.loadVeiculos();
      }
    });
  }

  editVeiculo(id: number){
    this.router.navigate([`inserir/${id}`]);
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