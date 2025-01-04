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
  arrayWithoutSpaces: any = []
  @Output() sendQtyWords = new EventEmitter<any>();

  public ngOnInit(): void {
    this.removeNumbersOfArray()
  }

  calculateQtyWords(): void {
    this.listOfWords = this.wordsOnField

    this.arrayWithoutSpaces = this.listOfWords.split(' ').filter(function (element: any = []) {
      return element
    })

    console.log('Qt. palavras: ' + this.listOfWords)
  }

  removeNumbersOfArray(): void{
    this.arrayWithoutSpaces = this.arrayWithoutSpaces.filter((x: any = []) => isNaN(x))
    this.arrayWithoutSpaces = this.arrayWithoutSpaces.length

    console.log('tamanho do array: ' + this.arrayWithoutSpaces)

    this.sendQtyWords.emit(this.arrayWithoutSpaces)
  }
}
