import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoCreatorComponent } from './curso-creator.component';

describe('CursoCreatorComponent', () => {
  let component: CursoCreatorComponent;
  let fixture: ComponentFixture<CursoCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursoCreatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
