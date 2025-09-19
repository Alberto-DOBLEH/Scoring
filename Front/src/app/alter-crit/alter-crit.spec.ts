import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterCrit } from './alter-crit';

describe('AlterCrit', () => {
  let component: AlterCrit;
  let fixture: ComponentFixture<AlterCrit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlterCrit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterCrit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
