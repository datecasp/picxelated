import { Component } from '@angular/core';
import { PintarService } from 'src/app/services/pintar.service';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css'],
})
export class BotoneraComponent {
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
}
