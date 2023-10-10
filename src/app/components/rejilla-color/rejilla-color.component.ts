import { Component, Input } from '@angular/core';
import { PaletaColores } from 'src/app/data/paleta-colores';
import { PintarService } from 'src/app/services/pintar.service';

@Component({
  selector: 'app-rejilla-color',
  templateUrl: './rejilla-color.component.html',
  styleUrls: ['./rejilla-color.component.css']
})
export class RejillaColorComponent {
  @Input() numeroColumnas: number = 0;
  @Input() numeroFilas: number = 0;
  cuadradosColor : any[] = [];
  constructor(private pintarService : PintarService) {}
  ngOnInit(): void {
    this.cuadradosColor = Array(this.numeroFilas).fill({color : ""});
    this.PintaColorCuadrado();
  }

  PintaColorCuadrado(): void {
    var colores = PaletaColores;
    this.cuadradosColor.forEach((cuadrado, i) => {
      cuadrado = JSON.parse(JSON.stringify(cuadrado)); 
      cuadrado.color = colores[i]; 
      this.cuadradosColor[i] = cuadrado; 
    });
  }

}
