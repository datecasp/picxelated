import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rejilla-color',
  templateUrl: './rejilla-color.component.html',
  styleUrls: ['./rejilla-color.component.css']
})
export class RejillaColorComponent {
  @Input() filasRejilla: number = 0;
  @Input() numeroColumnas: number = 0;
  filas: any[] = [];
  constructor() {}
  ngOnInit(): void {
    this.filas = Array(this.filasRejilla).fill('');
  }
}
