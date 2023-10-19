import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { PintarService } from 'src/app/services/pintar.service';

@Component({
  selector: 'app-cuadrado-color',
  templateUrl: './cuadrado-color.component.html',
  styleUrls: ['./cuadrado-color.component.css']
})
export class CuadradoColorComponent {
  @Input() color: string = ''; // Color inicial transparente

  constructor(private pintarService: PintarService, private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  public ElegirColor(): void {

    this.pintarService.colorElegido = this.color;
    this.pintarService.fondoElegido = true;
  }
}