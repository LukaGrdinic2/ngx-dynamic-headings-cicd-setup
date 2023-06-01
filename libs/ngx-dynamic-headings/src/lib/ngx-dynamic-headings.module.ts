import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicHeadingDirective } from './dynamic-headings/src/directives/dynamic-heading.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [DynamicHeadingDirective],
  exports: [DynamicHeadingDirective],
})
export class NgxDynamicHeadingsModule {}
