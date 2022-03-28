import { Component, OnInit } from '@angular/core';
import { Veiculo } from 'src/app/models/veiculo.model';
import { VeiculoService } from 'src/app/services/veiculo.service';

@Component({
  selector: 'app-add-veiculo',
  templateUrl: './add-veiculo.component.html',
  styleUrls: ['./add-veiculo.component.css']
})
export class AddVeiculoComponent implements OnInit {

  veiculo?: Veiculo;
  submitted = false;

  constructor(private svc: VeiculoService) { 
    this.initVeiculo();
  }

  ngOnInit(): void {
  }

  save(): void {
    const data = this.veiculo;
    this.svc.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newTutorial(): void {
    this.submitted = false;
    this.initVeiculo();
  }

  initVeiculo() {
    this.veiculo = { id: -1, ano: 0, chassi: 0, renavam: 0, marca: '', modelo: '', placa: '' };
  }

}
