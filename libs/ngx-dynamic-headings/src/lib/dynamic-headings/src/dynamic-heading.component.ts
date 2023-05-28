import { Component, ElementRef, OnInit, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { extractNumberFromString, getSortedHeadings } from './utils/utils';

@Component({
  selector: 'h',
  templateUrl: './dynamic-heading.component.html',
  styleUrls: ['./dynamic-heading.component.css'],
})
export class DynamicHeadingComponent implements OnInit {

  @ViewChild('template', { static: true }) template: any;

  @Input() content!: string;

  resolvedHeadingLevel!: string;

  constructor(private elementRef: ElementRef, private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {

    this.viewContainerRef.createEmbeddedView(this.template);
    const headings = getSortedHeadings();
    const headingsParentNodes = Array.from(headings).map(h => h.parentNode);
    let smallestHeadingLevel = extractNumberFromString(headings[0].tagName);
    for (let i = 0; i<headingsParentNodes.length; i++) {
      if (headingsParentNodes[i]?.contains(this.elementRef.nativeElement)) {
        this.resolvedHeadingLevel = `h${smallestHeadingLevel+1}`;
        break;
      } else {
        smallestHeadingLevel = extractNumberFromString(headings[i + 1].tagName);
      }
    }
    this.destroyComponent();
  }

  destroyComponent() {
    this.viewContainerRef
    .element
    .nativeElement
    .parentElement
    .removeChild(this.viewContainerRef.element.nativeElement);
  }
}