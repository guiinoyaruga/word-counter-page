import { Component } from '@angular/core';
import { WordCounterButtonComponent } from "../word-counter-button/word-counter-button.component";

@Component({
  selector: 'app-word-counter-field',
  standalone: true,
  imports: [WordCounterButtonComponent],
  templateUrl: './word-counter-field.component.html',
  styleUrl: './word-counter-field.component.css'
})
export class WordCounterFieldComponent {
  
}
