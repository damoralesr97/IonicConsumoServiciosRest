import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarRolPage } from './listar-rol.page';

describe('ListarRolPage', () => {
  let component: ListarRolPage;
  let fixture: ComponentFixture<ListarRolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarRolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarRolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
