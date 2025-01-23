import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-quantity-words',
  standalone: true,
  imports: [QuantityWordsComponent],
  templateUrl: './quantity-words.component.html',
  styleUrl: './quantity-words.component.css'
})
export class QuantityWordsComponent {
  @Input() receiveQtyWord: any

  showTotalWords (data: any){
    this.receiveQtyWord = data
  }
}
