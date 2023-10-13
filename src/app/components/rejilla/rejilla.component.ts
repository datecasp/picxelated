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
  id : number = -2;

  constructor(private pintarService: PintarService) {}

  ngOnInit(): void {
    RejillaComponent.cuadrados = Array(this.filasRejilla).fill({ color: '', id: 0 });
    this.pintarService.btnLimpiar$.subscribe(() => {
      this.LimpiarCanvas();
    });

    this.pintarService.btnGuardarArray$.subscribe(() => {
      this.GuardarArray();
    });
    this.carga = false;
  }

  /*
  Poner una prop en cuadrado index que se asigna en Limpiar al cargar (quitar la validacion de LimpiarCanvas)
  Cuando se pinta un cuadrado, tiene que llamar un output que le pasa a la rejilla el index y el color del cuadrado pintado 
  y la rejilla debe actualizar su array cuadrados con el nuevo color para el indice que sea
  */
  LimpiarCanvas(): void {
    RejillaComponent.cuadrados.forEach((cuadrado, i) => {
      cuadrado = JSON.parse(JSON.stringify(cuadrado));
      cuadrado.color = '#FFF';
      cuadrado.id = i;
      this.id = i;
      RejillaComponent.cuadrados[i] = cuadrado;
      this.arrayCuadrados[i] = cuadrado;
    });
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
      a.click();
      window.URL.revokeObjectURL(url);

      this.carga = false;
    }
  }

  ActualizarId(datos: { id: number, color: string }): void {
    const cuadrado = { id: datos.id, color: datos.color };
    RejillaComponent.cuadrados[datos.id] = cuadrado;
  }
}
