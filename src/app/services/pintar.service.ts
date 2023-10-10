import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PintarService {
  public btnPulsado: boolean = false;
  public colorElegido : string = "";

  constructor() { }
}
