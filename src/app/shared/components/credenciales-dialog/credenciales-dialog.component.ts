import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-credenciales-dialog',
  standalone: false,
  templateUrl: './credenciales-dialog.component.html',
  styleUrl: './credenciales-dialog.component.scss'
})
export class CredencialesDialogComponent {
  constructor(public dialogRef: MatDialogRef<CredencialesDialogComponent>) {}

  cerrar(): void {
    this.dialogRef.close();
  }
}
