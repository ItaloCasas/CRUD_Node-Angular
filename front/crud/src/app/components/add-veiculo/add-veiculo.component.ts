import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Veiculo } from 'src/app/models/veiculo.model';

import { VeiculoService } from 'src/app/services/veiculo.service';

@Component({
  selector: 'app-add-veiculo',
  templateUrl: './add-veiculo.component.html',
  styleUrls: ['./add-veiculo.component.css']
})
export class AddVeiculoComponent implements OnInit {

  veiculo: Veiculo = { ano: 0, chassi: '', renavam: '', marca: '', modelo: '', placa: '' };
  id: any = -1;
  submitted: boolean = false;
  constructor(private svc: VeiculoService, private route: ActivatedRoute, private router: Router) { 
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params ? params.get('id') : -1;
      if (this.id && this.id > -1){
        this.load();
      }
    });
  }

  save(): void {
    this.id && this.id > -1 ? this.update() : this.create();
  }

  load() {
    this.svc.get(this.id).subscribe({
      next: (res: Veiculo) => {
        console.log(res);
        if(res.id) {
          delete res.id;
        }
        this.veiculo = res;
      },
      error: (e:any) => {
        e && e.error ? alert(e.error.text) : alert("Erro ao ler veículo");
      }
    });
  }

  create() {
    const data = this.veiculo;
    this.svc.create(data)
      .subscribe({
        next: (res:any) => {
          console.log(res);
          alert("Veículo inserido com sucesso.");
          this.router.navigate(['veiculos']);
        },
        error: (e:any) => {
          console.log(e);
          if (e && e.status === 200) {
            alert("Veículo inserido com sucesso.");
            this.router.navigate(['veiculos']);
          } else {
            e && e.error ? alert(e.error) : alert("Erro ao inserir veículo")
          }
        }
      });
  }

  update() {
    const data = this.veiculo;
    console.log('------------')
    console.log(data);
    console.log('------------')
    this.svc.update(this.id, data)
      .subscribe({
        next: (res:any) => {
          console.log(res);
          alert("Veículo atualizado com sucesso.");
          this.router.navigate(['veiculos']);
        },
        error: (e:any) => {
          console.log(e);
          if (e && e.status === 200) {
            alert("Veículo atualizado com sucesso.");
            this.router.navigate(['veiculos']);
          } else {
            e && e.error ? alert(e.error) : alert("Erro ao atualizar veículo")
          }
        }
      });
  }
}
