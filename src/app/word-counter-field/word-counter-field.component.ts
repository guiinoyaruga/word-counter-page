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
  
  calculateQtyWords(){
    let arrayCleared = []
    this.listOfWords = this.wordsOnField.split(' ')

    for(let i = 0; i <this.listOfWords; i++){
      if(this.listOfWords[i] == " "){
        this.listOfWords[i].splice(this.listOfWords[i], 1)|

        arrayCleared.push(this.listOfWords[i])
      }
    }
    this.listOfWords = arrayCleared
    this.listOfWords = this.listOfWords.length

    this.sendQtyWords.emit(this.listOfWords.length)
    console.log(arrayCleared.length)
  }
}
