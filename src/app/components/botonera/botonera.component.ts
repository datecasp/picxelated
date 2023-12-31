import { Component, ElementRef, Renderer2 , ViewChild } from '@angular/core';
import { PintarService } from 'src/app/services/pintar.service';
import html2canvas from 'html2canvas';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { DialogColorFondoComponent } from './dialog-color-fondo/dialog-color-fondo.component';


@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css'],
})
export class BotoneraComponent {
  @ViewChild('fileInput') fileInput: ElementRef | undefined;
  ttColorFondo: string = 'Cambia el color del fondo de la rejilla';
  ttDibujoFondo: string = 'Cambia el color del fondo de la rejilla integrando el dibujo existente';
  ttLimpiar: string = 'Borra el dibujo de la rejilla para empezar uno nuevo';
  ttGuardarImagen: string = 'Guarda el dibujo como un archivo de imagen JPG';
  ttGuardarArchivo: string =
    'Guarda el dibujo como un archivo JSON para poder seguir dibujando después';
  ttCargarArchivo: string =
    'Carga un dibujo desde un archivo JSON para seguir pintando sobre el';
  color: string = '#FFF';
  mexclarDibujo :boolean = false;

  constructor(private pintarService: PintarService, public dialog: MatDialog, private renderer: Renderer2, private elementRef: ElementRef) {}

  public AbrirSelector(mezclarDibujo : boolean): void {
    this.pintarService.fondoElegido = false;
    this.pintarService.mezclarDibujo = mezclarDibujo;
    const dialogRef = this.dialog.open(DialogColorFondoComponent, {
      width: '550px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Este Limpiar pinta el fondo de la rejilla del color elegido
      // El Dialog ha seteado a true la variable pintarService.pintarFondo
     
    });
  }
  public LimpiarCanvas(): void {
    this.pintarService.notificarLimpiar();
  }

  public GuardarCanvas() {
    const componentElement = document.getElementById('rejillaJuego');

    if (componentElement) {
      html2canvas(componentElement).then((canvas) => {
        const image = canvas.toDataURL('image/jpeg');

        // Crea un enlace para descargar la imagen
        const a = document.createElement('a');
        a.href = image;
        a.download = 'Picxelated.jpg'; // Cambia el nombre de archivo si es necesario
        a.style.display = 'none';

        // Agrega el enlace al DOM y simula un clic en él
        document.body.appendChild(a);
        a.click();

        // Limpia el enlace después de la descarga
        document.body.removeChild(a);
      });
    } else {
      console.error('No se encontró el elemento con el ID "rejillaJuego".');
    }
  }

  public GuardarArray() {
    this.pintarService.notificarGuardarArray();
  }

  public CargarArchivo(): void {
    if (this.fileInput != undefined) {
      this.fileInput.nativeElement.click();
    }
  }

  public CargarArray(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      const file = files[0];
      this.pintarService.notificarCargarArray(file);
    }
  }
}

