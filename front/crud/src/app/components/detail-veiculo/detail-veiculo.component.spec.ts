import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailVeiculoComponent } from './detail-veiculo.component';

describe('DetailVeiculoComponent', () => {
  let component: DetailVeiculoComponent;
  let fixture: ComponentFixture<DetailVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailVeiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
