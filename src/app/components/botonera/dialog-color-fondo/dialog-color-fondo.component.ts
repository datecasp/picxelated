import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PintarService } from 'src/app/services/pintar.service';

interface colorFondo {
  color: string;
}

@Component({
  selector: 'app-dialog-color-fondo',
  templateUrl: './dialog-color-fondo.component.html',
  styleUrls: ['./dialog-color-fondo.component.css'],
})
export class DialogColorFondoComponent {
  constructor(
    private pintarService: PintarService,
    public dialogRef: MatDialogRef<DialogColorFondoComponent>,
  ) {}

  SeleccionarColor(): void {
   this.pintarService.pintarFondo = true;
   this.dialogRef.close();
  }

  onNoClick(): void {
    this.pintarService.pintarFondo = false;
    this.dialogRef.close();
  }
}
