import { Directive, ElementRef, AfterContentInit } from '@angular/core';
import { extractNumberFromString, getSortedHeadings } from '../utils/utils';

@Directive({
  selector: 'h',
})
export class DynamicHeadingDirective implements AfterContentInit {
  resolvedHeadingLevel!: string;
  headingText = '';

  constructor(public elementRef: ElementRef<HTMLUnknownElement>) {}

  ngAfterContentInit() {
    this.headingText = this.elementRef.nativeElement.outerText;
    const headings = getSortedHeadings();
    const headingsParentNodes = Array.from(headings).map((h) => h.parentNode);
    let smallestHeadingLevel = extractNumberFromString(headings[0].tagName);
    for (let i = 0; i < headingsParentNodes.length; i++) {
      if (headingsParentNodes[i]?.contains(this.elementRef.nativeElement)) {
        this.resolvedHeadingLevel = `h${smallestHeadingLevel + 1}`;
        this.replaceWithResolvedHeading();
        break;
      } else {
        smallestHeadingLevel = extractNumberFromString(headings[i + 1].tagName);
      }
    }
  }

  private replaceWithResolvedHeading() {
    const resolvedHeadingElement = document.createElement(
      this.resolvedHeadingLevel
    );
    resolvedHeadingElement.innerText = this.headingText;
    this.elementRef.nativeElement.replaceWith(resolvedHeadingElement);
  }
}
