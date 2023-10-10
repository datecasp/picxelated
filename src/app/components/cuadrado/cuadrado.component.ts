import { Component, Input } from '@angular/core';
import { PintarService } from 'src/app/services/pintar.service';

@Component({
  selector: 'app-cuadrado',
  templateUrl: './cuadrado.component.html',
  styleUrls: ['./cuadrado.component.css'],
})
export class CuadradoComponent {
  @Input() color: string = 'transparent'; // Color inicial transparente
btnPulsado : boolean = false;
  constructor(private pintarService: PintarService) { }

  public EmpezarPintar() {
    // Cambia el color cuando se hace clic en el cuadrado
    this.color = this.pintarService.colorElegido;
    this.cambiaPulsador();
  }

  public cambiaPulsador(): void {
    this.pintarService.btnPulsado = !this.pintarService.btnPulsado;
  }

  public Pintar(): void {
    if (this.pintarService.btnPulsado) {
      this.color = this.pintarService.colorElegido;
    }
  }

  public PararPintar(): void {
    this.pintarService.btnPulsado = false;
  }
}
