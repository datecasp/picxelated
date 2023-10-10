import { Component } from '@angular/core';
import { PintarService } from 'src/app/services/pintar.service';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css'],
})
export class BotoneraComponent {
  constructor(private pintarService: PintarService) {}

  public LimpiarCanvas(): void {
    this.pintarService.notificarLimpiar();
  }
}
