import { NgModule } from '@angular/core';
import { IsFinishedPipe } from './is-finished.pipe';
@NgModule({
  declarations: [IsFinishedPipe],
  exports:[IsFinishedPipe]
})
export class PipesModule { }
