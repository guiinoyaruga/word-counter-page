import { Routes } from '@angular/router';
import { WordCounterButtonComponent } from './word-counter-button/word-counter-button.component';
import { WordCounterFieldComponent } from './word-counter-field/word-counter-field.component';

export const routes: Routes = [
{
    path: '',
    component: WordCounterFieldComponent
}
];
