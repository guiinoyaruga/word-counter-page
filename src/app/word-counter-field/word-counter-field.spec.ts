import { TestBed } from '@angular/core/testing';
import { WordCounterFieldComponent } from './word-counter-field.component';
import { QuantityWordsComponent } from '../quantity-words/quantity-words.component';
import { of } from 'rxjs';

class Mock extends WordCounterFieldComponent {
  response: any = 'teste'

  override calculateQtyWords() {
    return of(this.response)
  }
}


describe('WordCounterFieldComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordCounterFieldComponent, QuantityWordsComponent
      ],
      providers: [{
        provide: WordCounterFieldComponent,
        useClass: Mock
      }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(WordCounterFieldComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should contain text area and placeholder text area', () => {
    const fixture = TestBed.createComponent(WordCounterFieldComponent)
    const compile = fixture.nativeElement as HTMLElement
    fixture.detectChanges()
    expect(compile.querySelector('textarea')).toBeTruthy()
    expect(compile.querySelector('textarea')?.placeholder).toContain('Digite ou cole suas palavras aqui :)')
  })

  it('should have a title on navbar', () => {
    const fixture = TestBed.createComponent(WordCounterFieldComponent)
    const compile = fixture.nativeElement as HTMLElement
    fixture.detectChanges()
    expect(compile.querySelector('span')?.textContent).toContain("Contador de palavra")
  })

  it('should have a button to calculate words of text area', () => {
    const fixture = TestBed.createComponent(WordCounterFieldComponent)
    const compile = fixture.nativeElement as HTMLElement
    fixture.detectChanges()
    expect(compile.querySelector('button')).toBeTruthy()
    expect(compile.querySelector('button')?.textContent).toContain('Clique para contar!')
  });

  it('should show a error message', () => {
  });

});