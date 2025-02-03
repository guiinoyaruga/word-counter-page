import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { WordCounterFieldComponent } from './word-counter-field.component';
import { QuantityWordsComponent } from '../quantity-words/quantity-words.component';
import { MyServiceService } from '../my-service.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

describe('WordCounterFieldComponent', () => {
  let http: MyServiceService
  let fixture: any
  let component: any
  let htmlComponent: any


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordCounterFieldComponent, QuantityWordsComponent, HttpClientTestingModule
      ],
      providers: [
        { provider: ComponentFixtureAutoDetect, useValue: true }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(WordCounterFieldComponent);
    component = fixture.componentInstance;
    htmlComponent = fixture.nativeElement as HTMLElement
    // fixture.detectChanges()
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should contain text area and placeholder text area', () => {
    expect(htmlComponent.querySelector('textarea')).toBeTruthy()
    expect(htmlComponent.querySelector('textarea')?.placeholder).toContain('Digite ou cole suas palavras aqui :)')
  })

  it('should have a title on navbar', () => {
    expect(htmlComponent.querySelector('span')?.textContent).toContain("Contador de palavra")
  })

  it('should have a button to calculate words of text area', () => {
    let buttonElement = fixture.debugElement.query(By.css('.btn.btn-secondary')).nativeElement
    let buttonColor = window.getComputedStyle(buttonElement);

    expect(htmlComponent.querySelector('button')).toBeTruthy()
    expect(htmlComponent.querySelector('button')?.textContent).toContain('Clique para contar!')
    expect(buttonColor.backgroundColor).toBe('rgb(239, 239, 239)')
  });

  it('should show a alert if button is clicked when textarea is empty', () => {
    let alert = fixture.debugElement.query(By.css('.alert.alert-danger.d-none.mt-2')).nativeElement
    let button = fixture.debugElement.query(By.css('button'))

    button.triggerEventHandler('click', null)

    fixture.detectChanges()

    expect(alert.textContent).toBe(' Ops, digite no campo abaixo! ')
  });

  it('should typing on text area', () => {
    let textArea = fixture.debugElement.query(By.css('textarea')).nativeElement
    textArea.value = 'Hoje vamos digitar neste campo maravilhoso'
    textArea.dispatchEvent(new Event('textarea'))

    expect(textArea.value).toBe('Hoje vamos digitar neste campo maravilhoso')

  });
  it('should call function separateTypeQty', () => {
    const component = fixture.componentInstance;
    let spiedComponent = spyOn(component, 'separateTypeQty').and.callThrough()

    component.separateTypeQty()

    expect(spiedComponent).toHaveBeenCalledTimes(1)
    expect(component.allArray).toEqual({ qtyArrayNoNumber: 0, qtyArrayNoWords: 0, qtyArrayOnlyLetters: undefined })
  }
  )

  it('should call function calculateQtyWords', () => {
    const component = fixture.componentInstance;
    let spiedComponent = spyOn(component, 'calculateQtyWords').and.callThrough()

    component.calculateQtyWords()

    expect(spiedComponent).toHaveBeenCalledTimes(1)
    expect(component.listOfWords).toEqual('')
  }
  )

  it('should call function calculateQtyNumbers', () => {
    const component = fixture.componentInstance;
    let spiedComponent = spyOn(component, 'calculateQtyNumbers').and.callThrough()

    component.calculateQtyNumbers()

    expect(spiedComponent).toHaveBeenCalledTimes(1)
    expect(component.arrayWithoutWords).toEqual(0)
  }
  )
  it('should make a subscribe', () => {
    const component = fixture.componentInstance;
    http = TestBed.inject(MyServiceService)

    const response = [{
      id: 1,
      nome: 'gui',
      idade: 20
    }]

    spyOn(http, 'buscarListagemUsuarios').and.returnValue(of(response))

    component.getData()

    expect(component.data).toEqual(response)

  });

  it('should have call  fake async', fakeAsync(() => {
    const component = fixture.componentInstance;

    component.fakeFunctionAsyncTest()

    tick(100)

    expect(component.fakeVar).toBe('Guizera')
  }));
});