import { Component, Input } from '@angular/core';
import { PintarService } from 'src/app/services/pintar.service';
import { CuadradoComponent } from '../cuadrado/cuadrado.component';

@Component({
  selector: 'app-rejilla',
  templateUrl: './rejilla.component.html',
  styleUrls: ['./rejilla.component.css'],
})
export class RejillaComponent {
  @Input() filasRejilla: number = 0;
  @Input() numeroColumnas: number = 0;
  private carga: boolean = true;
  arrayCuadrados: any[] = [];
  private static cuadrados: any[] = [];
  id: number = -2;

  constructor(private pintarService: PintarService) {}

  ngOnInit(): void {
    RejillaComponent.cuadrados = Array(this.filasRejilla).fill({
      color: '',
      id: 0,
    });
    this.pintarService.btnLimpiar$.subscribe(() => {
      this.LimpiarCanvas();
    });

    this.pintarService.btnGuardarArray$.subscribe(() => {
      this.GuardarArray();
    });

    this.pintarService.btnCargarArray$.subscribe(() => {
      this.CargarArrayDesdeArchivo(event);
    });

    this.carga = false;
  }
  LimpiarCanvas(): void {
    /* La variable del servicio pintarService.pintarFondo indica si
     es un borrado de canvas o pintarlo de un color determinado
     La variable pintarService.fondoElegido indica si hay elegido 
     un fondo en el selector
     */
    var color =
      this.pintarService.fondoElegido && this.pintarService.pintarFondo
        ? this.pintarService.colorElegido
        :  '#FFF';
    RejillaComponent.cuadrados.forEach((cuadrado, i) => {
      cuadrado = JSON.parse(JSON.stringify(cuadrado));
      cuadrado.color = color;
      cuadrado.id = i;
      this.id = i;
      RejillaComponent.cuadrados[i] = cuadrado;
      this.arrayCuadrados[i] = cuadrado;
    });
    this.pintarService.pintarFondo = false;
  }

  GuardarArray(): void {
    if (!this.carga) {
      const jsonData = JSON.stringify(RejillaComponent.cuadrados);
      const blob = new Blob([jsonData], { type: 'application/json' });

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'miArray.json'; // Nombre del archivo
      document.body.appendChild(a);
      //a.click();
      a.dispatchEvent(new MouseEvent('click'));
      window.URL.revokeObjectURL(url);

      this.carga = false;
    }
  }

  ActualizarId(datos: { id: number; color: string }): void {
    const cuadrado = { id: datos.id, color: datos.color };
    RejillaComponent.cuadrados[datos.id] = cuadrado;
  }

  CargarArrayDesdeArchivo(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const jsonData = JSON.parse(reader.result as string);

        if (Array.isArray(jsonData)) {
          // Verifica si el archivo contiene un array de colores
          if (jsonData.length === RejillaComponent.cuadrados.length) {
            RejillaComponent.cuadrados = jsonData;
            this.arrayCuadrados = [...jsonData];
          } else {
            console.error('El archivo no tiene la longitud adecuada.');
          }
        } else {
          console.error('El archivo no contiene un array de colores.');
        }
      } catch (error) {
        console.error('Error al analizar el archivo JSON:', error);
      }
    };

    reader.readAsText(file);
  }
}
