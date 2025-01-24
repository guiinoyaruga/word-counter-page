import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuantityWordsComponent } from "../quantity-words/quantity-words.component";

@Component({
  selector: 'app-word-counter-field',
  standalone: true,
  imports: [QuantityWordsComponent, FormsModule, WordCounterFieldComponent],
  templateUrl: './word-counter-field.component.html',
  styleUrl: './word-counter-field.component.css'
})
export class WordCounterFieldComponent {
  wordsOnField: string = ""
  listOfWords: any = []
  arrayWithoutSpaces: any = []
  arrayWithoutNumbers: any = []
  arrayWithoutWords: any = []
  arrayWithOnlyLetters: any = []
  allArray: any = {}
  @Output() sendQtyWords = new EventEmitter<any>();

  public ngOnInit(): void {
    this.removeNumbersOfArray()
  }

  calculateQtyWords(): void {
    this.listOfWords = this.wordsOnField

    this.arrayWithoutSpaces = this.listOfWords.split(' ').filter(function (element: any = []) {
      return element
    })

    return this.arrayWithoutSpaces
  }
  removeNumbersOfArray(): void {
    this.arrayWithoutNumbers = this.arrayWithoutSpaces.filter((x: any = []) => isNaN(x))
    this.arrayWithoutNumbers = this.arrayWithoutNumbers.length

    this.arrayWithoutWords = this.arrayWithoutSpaces.filter((x: any = []) => Number(x))
    this.arrayWithoutWords = this.arrayWithoutWords.length

    this.arrayWithOnlyLetters = this.arrayWithoutSpaces.toString()
    this.arrayWithOnlyLetters = this.arrayWithOnlyLetters.split('')
    this.arrayWithOnlyLetters = this.arrayWithOnlyLetters.filter((x: any = []) => isNaN(x))

    this.allArray = {
      qtyArrayNoNumber: this.arrayWithoutNumbers,
      qtyArrayNoWords: this.arrayWithoutWords,
      qtyArrayOnlyLetters: this.arrayWithOnlyLetters
    }
    this.sendQtyWords.emit(this.allArray)
  }
}
