import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CredencialesDialogComponent } from './credenciales-dialog.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

fdescribe('CredencialesDialogComponent', () => {
  let component: CredencialesDialogComponent;
  let fixture: ComponentFixture<CredencialesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CredencialesDialogComponent],
      imports: [
        MatDialogModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: { close: jasmine.createSpy('close') } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CredencialesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

