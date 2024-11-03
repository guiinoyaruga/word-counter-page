import { Component, Input} from '@angular/core';
import { WordCounterFieldComponent } from '../word-counter-field/word-counter-field.component';

@Component({
  selector: 'app-quantity-words',
  standalone: true,
  imports: [QuantityWordsComponent, WordCounterFieldComponent],
  templateUrl: './quantity-words.component.html',
  styleUrl: './quantity-words.component.css'
})
export class QuantityWordsComponent {
  @Input() receiveQtyWord: any

  showTotalWords (data: any){
    this.receiveQtyWord = data
  }
}
