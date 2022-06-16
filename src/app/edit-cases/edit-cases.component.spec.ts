import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCasesComponent } from './edit-cases.component';

describe('EditCasesComponent', () => {
  let component: EditCasesComponent;
  let fixture: ComponentFixture<EditCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
