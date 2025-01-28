import { TestBed } from '@angular/core/testing';
import { WordCounterFieldComponent } from './word-counter-field.component';
import { QuantityWordsComponent } from '../quantity-words/quantity-words.component';

describe('WordCounterFieldComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordCounterFieldComponent, QuantityWordsComponent
      ],
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

  it('should call function separateTypeQty', () => {
    const fixture = TestBed.createComponent(WordCounterFieldComponent)
    const component = fixture.componentInstance;
    let spiedComponent = spyOn(component, 'separateTypeQty').and.callThrough()

    component.separateTypeQty()

    expect(spiedComponent).toHaveBeenCalledTimes(1)
    expect(component.allArray).toEqual({ qtyArrayNoNumber: 0, qtyArrayNoWords: 0, qtyArrayOnlyLetters: undefined })
  }
  )

  it('should call function calculateQtyWords', () => {
    const fixture = TestBed.createComponent(WordCounterFieldComponent)
    const component = fixture.componentInstance;
    let spiedComponent = spyOn(component, 'calculateQtyWords').and.callThrough()

    component.calculateQtyWords()

    expect(spiedComponent).toHaveBeenCalledTimes(1)
    expect(component.listOfWords).toEqual('')
  }
  )

  it('should call function calculateQtyNumbers', () => {
    const fixture = TestBed.createComponent(WordCounterFieldComponent)
    const component = fixture.componentInstance;
    let spiedComponent = spyOn(component, 'calculateQtyNumbers').and.callThrough()

    component.calculateQtyNumbers()

    expect(spiedComponent).toHaveBeenCalledTimes(1)
    expect(component.arrayWithoutWords).toEqual(0)
  }
  )
});