import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { QuantityWordsComponent } from '../quantity-words/quantity-words.component';
import { MyServiceService } from '../my-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

describe('QuantityWordsComponent', () => {
    let fixture: any
    let component: any
    let htmlComponent: any

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [QuantityWordsComponent, HttpClientTestingModule
            ],
            providers: [
                { provider: ComponentFixtureAutoDetect, useValue: true }
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(QuantityWordsComponent);
        component = fixture.componentInstance;
        htmlComponent = fixture.nativeElement as HTMLElement
    });

    it('should component is true', () => {
        expect(component).toBeTruthy()
    });

    it('should receive input of textArea', () => {
        let data = 'dados digitados na textarea'
        let spiedComponent = spyOn(component, 'showTotalWords').and.callThrough()

        component.showTotalWords(data)

        expect(spiedComponent).toHaveBeenCalledTimes(1)
        expect(component.receiveQtyWord).toEqual(data)
    });

    it('should show quantities of elements', () => {
        expect(htmlComponent.querySelector('div')).toBeTruthy()
        expect(htmlComponent.querySelector('div')?.textContent).toContain('Quantidade de palavras:')
        expect(htmlComponent.querySelector('div')?.textContent).toContain('Quantidade de números:')
        expect(htmlComponent.querySelector('div')?.textContent).toContain('Quantidade de letras:')
    });
});