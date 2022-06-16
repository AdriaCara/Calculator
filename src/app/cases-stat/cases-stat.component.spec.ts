import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesStatComponent } from './cases-stat.component';

describe('CasesStatComponent', () => {
  let component: CasesStatComponent;
  let fixture: ComponentFixture<CasesStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasesStatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasesStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
