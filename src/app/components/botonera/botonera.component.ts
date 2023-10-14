import { Component, ElementRef, ViewChild } from '@angular/core';
import { PintarService } from 'src/app/services/pintar.service';
import html2canvas from 'html2canvas';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css'],
})
export class BotoneraComponent {
  @ViewChild('fileInput') fileInput: ElementRef | undefined;
  ttLimpiar: string = 'Borra el dibujo de la rejilla para empezar uno nuevo';
  ttGuardarImagen: string = "Guarda el dibujo como un archivo de imagen JPG";
  ttGuardarArchivo : string ="Guarda el dibujo como un archivo JSON para poder seguir dibujando después";
  ttCargarArchivo: string ="Carga un dibujo desde un archivo JSON para seguir pintando sobre el"
  constructor(private pintarService: PintarService) {}

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
