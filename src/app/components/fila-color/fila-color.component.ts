import { Component, Input } from '@angular/core';
import { PaletaColores } from 'src/app/data/paleta-colores';

@Component({
  selector: 'app-fila-color',
  templateUrl: './fila-color.component.html',
  styleUrls: ['./fila-color.component.css'],
})
export class FilaColorComponent {
  @Input() numeroColumnas: number = 0;
  @Input() filaNumero: number = 0;
  cuadrados: any[] = [];
  colores: string[] = [];

  ngOnInit(): void {
    this.cuadrados = Array(this.numeroColumnas).fill({ color: 'transparent' });
    this.PintaColorCuadrado();
  }

  PintaColorCuadrado(): void {
    var colores = PaletaColores;
    this.cuadrados.forEach((cuadrado, i) => {

        cuadrado.color = colores[(this.filaNumero * 3 )+ i + 2] ;

    });
    
  }
}
