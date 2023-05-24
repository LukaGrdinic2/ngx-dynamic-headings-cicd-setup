import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicHeadingComponent } from './dynamic-heading/src/dynamic-heading.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DynamicHeadingComponent],
  exports: [DynamicHeadingComponent],
})
export class NgxDynamicHeadingsModule {}
