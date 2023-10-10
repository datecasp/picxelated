import { Component, Input } from '@angular/core';
import { PintarService } from 'src/app/services/pintar.service';

@Component({
  selector: 'app-rejilla',
  templateUrl: './rejilla.component.html',
  styleUrls: ['./rejilla.component.css'],
})
export class RejillaComponent {
  @Input() filasRejilla: number = 0;
  @Input() numeroColumnas: number = 0;
  cuadrados: any[] = [];
  constructor(private pintarService : PintarService) {}
  ngOnInit(): void {
    this.cuadrados = Array(this.filasRejilla).fill({color : ""});
    this.pintarService.btnLimpiar$.subscribe(() => {
      this.LimpiarCanvas();
    });

  }

  
  LimpiarCanvas(): void {
    this.cuadrados.forEach((cuadrado, i) => {
      cuadrado = JSON.parse(JSON.stringify(cuadrado)); 
      cuadrado.color = '#FFF'; 
      this.cuadrados[i] = cuadrado; 
    });
  }
}
