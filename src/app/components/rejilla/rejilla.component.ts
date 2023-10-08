import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rejilla',
  templateUrl: './rejilla.component.html',
  styleUrls: ['./rejilla.component.css'],
})
export class RejillaComponent {
  @Input() filasRejilla: number = 0;
  @Input() numeroColumnas: number = 0;
  filas: any[] = [];
  constructor() {}
  ngOnInit(): void {
    this.filas = Array(this.filasRejilla).fill('');
  }
}
