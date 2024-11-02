import { Component } from '@angular/core';
import { WordCounterFieldComponent } from "../word-counter-field/word-counter-field.component";

@Component({
  selector: 'app-word-counter-button',
  standalone: true,
  imports: [WordCounterFieldComponent, WordCounterFieldComponent],
  templateUrl: './word-counter-button.component.html',
  styleUrl: './word-counter-button.component.css'
})
export class WordCounterButtonComponent {

  public ngOnInit(): void {
    this.calculateWords()
  }

  calculateWords(){
    console.log('1')
  }

}
