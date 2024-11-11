import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuantityWordsComponent } from "../quantity-words/quantity-words.component";

@Component({
  selector: 'app-word-counter-field',
  standalone: true,
  imports: [WordCounterFieldComponent, FormsModule, QuantityWordsComponent],
  templateUrl: './word-counter-field.component.html',
  styleUrl: './word-counter-field.component.css'
})
export class WordCounterFieldComponent {
  wordsOnField: string = ""
  listOfWords: any = []
  @Output() sendQtyWords = new EventEmitter<any>();

  public ngOnInit(): void {
  }

  calculateQtyWords() {
    this.listOfWords = this.wordsOnField

    const arrayWithoutSpaces = this.listOfWords.split(' ').filter(function (element: any = []) {
      return element
    })

    this.listOfWords = arrayWithoutSpaces.length

    this.sendQtyWords.emit(this.listOfWords)
  }
}
