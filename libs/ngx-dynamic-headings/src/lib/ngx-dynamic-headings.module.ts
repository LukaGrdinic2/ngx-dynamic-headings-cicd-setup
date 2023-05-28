import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicHeadingComponent } from './dynamic-headings/src/dynamic-heading.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DynamicHeadingComponent],
  exports: [DynamicHeadingComponent],
})
export class NgxDynamicHeadingsModule {}
