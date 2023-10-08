import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuadradoComponent } from './components/cuadrado/cuadrado.component';
import { RejillaComponent } from './components/rejilla/rejilla.component';
import { UiRenderComponent } from './components/ui-render/ui-render.component';
import { FilaComponent } from './components/fila/fila.component';
import { CuadradoColorComponent } from './components/cuadrado-color/cuadrado-color.component';
import { FilaColorComponent } from './components/fila-color/fila-color.component';
import { RejillaColorComponent } from './components/rejilla-color/rejilla-color.component';

@NgModule({
  declarations: [
    AppComponent,
    CuadradoComponent,
    RejillaComponent,
    UiRenderComponent,
    FilaComponent,
    CuadradoColorComponent,
    FilaColorComponent,
    RejillaColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
