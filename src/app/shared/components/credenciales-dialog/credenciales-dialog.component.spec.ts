import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredencialesDialogComponent } from './credenciales-dialog.component';

describe('CredencialesDialogComponent', () => {
  let component: CredencialesDialogComponent;
  let fixture: ComponentFixture<CredencialesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CredencialesDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CredencialesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
