import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoSelectorComponent } from './curso-selector.component';

describe('CursoSelectorComponent', () => {
  let component: CursoSelectorComponent;
  let fixture: ComponentFixture<CursoSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursoSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
