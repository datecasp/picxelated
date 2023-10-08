import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiRenderComponent } from './components/ui-render/ui-render.component';

const routes: Routes = [
  {path: '', component: UiRenderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
