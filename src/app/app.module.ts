import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { CuadradoComponent } from './components/cuadrado/cuadrado.component';
import { RejillaComponent } from './components/rejilla/rejilla.component';
import { UiRenderComponent } from './components/ui-render/ui-render.component';
import { CuadradoColorComponent } from './components/cuadrado-color/cuadrado-color.component';
import { RejillaColorComponent } from './components/rejilla-color/rejilla-color.component';
import { BotoneraComponent } from './components/botonera/botonera.component';
import { PintarService } from './services/pintar.service';
import { DialogColorFondoComponent } from './components/botonera/dialog-color-fondo/dialog-color-fondo.component';

@NgModule({
  declarations: [
    AppComponent,
    CuadradoComponent,
    RejillaComponent,
    UiRenderComponent,
    CuadradoColorComponent,
    RejillaColorComponent,
    BotoneraComponent,
    DialogColorFondoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatCardModule
  ],
  providers: [PintarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
