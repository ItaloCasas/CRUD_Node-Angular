import { Component, OnInit } from '@angular/core';
import { Veiculo } from 'src/app/models/veiculo.model';

import { VeiculoService } from 'src/app/services/veiculo.service';

@Component({
  selector: 'app-add-veiculo',
  templateUrl: './add-veiculo.component.html',
  styleUrls: ['./add-veiculo.component.css']
})
export class AddVeiculoComponent implements OnInit {

  veiculo: Veiculo = { ano: 0, chassi: '', renavam: '', marca: '', modelo: '', placa: '' };
  submitted: boolean = false;
  constructor(private svc: VeiculoService) { 
  }

  ngOnInit(): void {}

  save(): void {
    const data = this.veiculo;
    this.svc.create(data)
      .subscribe({
        next: (res:any) => {
          console.log(res);
          alert("Veículo inserido com sucesso.");
        },
        error: (e:any) => {
          e && e.error ? alert(e.error.text) : alert("Erro ao inserir veículo")
        }
      });
  }
}
