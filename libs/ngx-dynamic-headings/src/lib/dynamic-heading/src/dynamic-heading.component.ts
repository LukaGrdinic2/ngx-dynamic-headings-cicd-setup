import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { extractNumberFromString, getSortedHeadings } from './utils/utils';

@Component({
  selector: 'ngx-dynamic-heading',
  templateUrl: './dynamic-heading.component.html',
  styleUrls: ['./dynamic-heading.component.css'],
})
export class DynamicHeadingComponent implements OnInit {

  @Input() content!: string;

  resolvedHeadingLevel!: string;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
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
  }
}