import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarPacientePage } from './listar-paciente.page';

describe('ListarPacientePage', () => {
  let component: ListarPacientePage;
  let fixture: ComponentFixture<ListarPacientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPacientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
