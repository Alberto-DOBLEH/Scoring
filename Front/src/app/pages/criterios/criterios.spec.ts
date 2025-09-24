import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriosPage } from './criterios';

describe('CriteriosPage', () => {
  let component: CriteriosPage;
  let fixture: ComponentFixture<CriteriosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriteriosPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriteriosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
