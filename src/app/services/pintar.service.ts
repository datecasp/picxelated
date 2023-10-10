import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PintarService {
  public btnPulsado: boolean = false;
  public colorElegido: string = '';
  public btnLimpiar = new BehaviorSubject<void>(undefined);

  btnLimpiar$ = this.btnLimpiar.asObservable();

  notificarLimpiar() {
    this.btnLimpiar.next();
  }
}
