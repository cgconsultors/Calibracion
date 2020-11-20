import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VelocidadPage } from './velocidad.page';

describe('VelocidadPage', () => {
  let component: VelocidadPage;
  let fixture: ComponentFixture<VelocidadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VelocidadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VelocidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
