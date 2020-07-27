import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearRolPage } from './crear-rol.page';

describe('CrearRolPage', () => {
  let component: CrearRolPage;
  let fixture: ComponentFixture<CrearRolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearRolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearRolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
