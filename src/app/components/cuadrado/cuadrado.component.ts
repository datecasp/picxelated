import { Component, Input } from '@angular/core';
import { PintarService } from 'src/app/services/pintar.service';

@Component({
  selector: 'app-cuadrado',
  templateUrl: './cuadrado.component.html',
  styleUrls: ['./cuadrado.component.css']
})
export class CuadradoComponent {
  @Input() color: string = 'transparent'; // Color inicial transparente

  constructor(private pintarService: PintarService) { }

  cambiarColor() {
    // Cambia el color cuando se hace clic en el cuadrado
    this.color = this.pintarService.colorElegido;
  }
}