import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.css'],
})
export class FilaComponent {
  @Input() numeroColumnas: number = 0;
  cuadrados: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.cuadrados = Array(this.numeroColumnas).fill({ color: 'transparent' });
  }
}
