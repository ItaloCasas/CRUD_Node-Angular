import { Component, OnInit } from '@angular/core';
import { Veiculo } from 'src/app/models/veiculo.model';

import { VeiculoService } from 'src/app/services/veiculo.service';

@Component({
  selector: 'app-add-veiculo',
  templateUrl: './add-veiculo.component.html',
  styleUrls: ['./add-veiculo.component.css']
})
export class AddVeiculoComponent implements OnInit {

  veiculo: Veiculo = { id: -1, ano: 0, chassi: '', renavam: '', marca: '', modelo: '', placa: '' };
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
          debugger;
          alert("Veículo inserido com sucesso.");
        },
        error: (e:any) => {
          console.error(e);
          alert("Veículo não pôde ser inserido.");
        }
      });
  }

  placaValid () { return this.veiculo.placa && this.veiculo.placa.length == 7; }
  marcaValid () { 
    debugger;
    return this.veiculo.marca !== undefined && this.veiculo.marca.length > 1; 
  }

  validate() {new Date()
    /*
    let fy: number = new Date().getFullYear();
    isValid = isValid && this.veiculo.chassi && this.veiculo.chassi.length == 17;
    isValid = isValid && this.veiculo.renavam && this.veiculo.renavam.length == 7;
    isValid = isValid && this.veiculo.modelo && this.veiculo.modelo.length > 1;
    isValid = isValid && this.veiculo.marca && this.veiculo.marca.length > 1;
    isValid = isValid && this.veiculo.ano && this.veiculo.ano >= 1950 && fy && this.veiculo.ano <= fy;

    return isValid;
    */
  }

}
