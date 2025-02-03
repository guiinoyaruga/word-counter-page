import { RouterModule, Routes } from '@angular/router';
import { WordCounterFieldComponent } from './word-counter-field/word-counter-field.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
{
    path: '',
    component: WordCounterFieldComponent
}
]
