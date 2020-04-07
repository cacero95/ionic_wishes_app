import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [ListasComponent],
  exports:[
    ListasComponent
  ],imports: [
    CommonModule,
    PipesModule,
    IonicModule // this import cotain all the items at ionic
  ]
})
export class ComponentsModule { }
