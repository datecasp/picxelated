import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cuadrado-color',
  templateUrl: './cuadrado-color.component.html',
  styleUrls: ['./cuadrado-color.component.css']
})
export class CuadradoColorComponent {
  @Input() color: string = 'transparent'; // Color inicial transparente

  cambiarColor() {
    // Cambia el color cuando se hace clic en el cuadrado
    this.color = this.generarColorAleatorio();
  }

  generarColorAleatorio(): string {
    // Genera un color aleatorio en formato hexadecimal
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}