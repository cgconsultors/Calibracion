import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VolumenPage } from './volumen.page';

describe('VolumenPage', () => {
  let component: VolumenPage;
  let fixture: ComponentFixture<VolumenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VolumenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
