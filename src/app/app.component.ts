import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WordCounterFieldComponent } from './word-counter-field/word-counter-field.component';
import { QuantityWordsComponent } from './quantity-words/quantity-words.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WordCounterFieldComponent, QuantityWordsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'word-counter-page';

}
