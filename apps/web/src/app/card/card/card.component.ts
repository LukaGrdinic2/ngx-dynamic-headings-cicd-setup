import { Component, Input } from '@angular/core';

@Component({
  selector: 'web-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {

  @Input() heading!: string; 
  @Input() paragraph!: string; 

}
