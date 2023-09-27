import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiculosGetComponent } from './vehiculos-get.component';

describe('VehiculosGetComponent', () => {
  let component: VehiculosGetComponent;
  let fixture: ComponentFixture<VehiculosGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculosGetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculosGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
