import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { CuadradoComponent } from './components/cuadrado/cuadrado.component';
import { RejillaComponent } from './components/rejilla/rejilla.component';
import { UiRenderComponent } from './components/ui-render/ui-render.component';
import { FilaComponent } from './components/fila/fila.component';
import { CuadradoColorComponent } from './components/cuadrado-color/cuadrado-color.component';
import { FilaColorComponent } from './components/fila-color/fila-color.component';
import { RejillaColorComponent } from './components/rejilla-color/rejilla-color.component';
import { BotoneraComponent } from './components/botonera/botonera.component';
import { PintarService } from './services/pintar.service';

@NgModule({
  declarations: [
    AppComponent,
    CuadradoComponent,
    RejillaComponent,
    UiRenderComponent,
    FilaComponent,
    CuadradoColorComponent,
    FilaColorComponent,
    RejillaColorComponent,
    BotoneraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule    ,
    MatButtonModule
  ],
  providers: [PintarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
