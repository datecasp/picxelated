import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PintarService {
  public btnPulsado: boolean = false;
  public colorElegido: string = '';
  public pintarFondo: boolean = false;
  public fondoElegido: boolean = false;
  public btnLimpiar = new BehaviorSubject<void>(undefined);
  public btnGuardarArray = new BehaviorSubject<void>(undefined);
  public btnCargarArray = new BehaviorSubject<void>(undefined);

  btnLimpiar$ = this.btnLimpiar.asObservable();
  btnGuardarArray$ = this.btnGuardarArray.asObservable();
  btnCargarArray$ = this.btnCargarArray.asObservable();

  notificarLimpiar() {
    this.btnLimpiar.next();
  }

  notificarGuardarArray() {
    this.btnGuardarArray.next();
  }

  notificarCargarArray(jsonCuadrado: any){
    this.btnCargarArray.next(jsonCuadrado);
  }
}
