import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesDetailsComponent } from './cases-details.component';

describe('CasesDetailsComponent', () => {
  let component: CasesDetailsComponent;
  let fixture: ComponentFixture<CasesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
