import { TestBed } from '@angular/core/testing';
import { WordCounterFieldComponent } from './word-counter-field.component';
import { QuantityWordsComponent } from '../quantity-words/quantity-words.component';

describe('WordCounterFieldComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ WordCounterFieldComponent, QuantityWordsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(WordCounterFieldComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('validate function', () => {
    const fixture2 = TestBed.createComponent(WordCounterFieldComponent);
    const app = fixture2.componentInstance;
    expect(app.calculateQtyWords()).toHaveSize(0);
  })

});