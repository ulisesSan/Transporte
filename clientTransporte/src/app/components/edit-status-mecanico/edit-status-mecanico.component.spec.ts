import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStatusMecanicoComponent } from './edit-status-mecanico.component';

describe('EditStatusMecanicoComponent', () => {
  let component: EditStatusMecanicoComponent;
  let fixture: ComponentFixture<EditStatusMecanicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStatusMecanicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditStatusMecanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
