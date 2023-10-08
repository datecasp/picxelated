import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fila-color',
  templateUrl: './fila-color.component.html',
  styleUrls: ['./fila-color.component.css']
})
export class FilaColorComponent {
  @Input() numeroColumnas: number = 0;
  cuadrados: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.cuadrados = Array(this.numeroColumnas).fill({ color: 'transparent' });
  }
}