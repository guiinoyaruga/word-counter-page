import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCounterFieldComponent } from './word-counter-field.component';

describe('WordCounterFieldComponent', () => {
  let component: WordCounterFieldComponent;
  let fixture: ComponentFixture<WordCounterFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordCounterFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordCounterFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
