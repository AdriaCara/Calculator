import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCasesComponent } from './add-cases.component';

describe('AddCasesComponent', () => {
  let component: AddCasesComponent;
  let fixture: ComponentFixture<AddCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
