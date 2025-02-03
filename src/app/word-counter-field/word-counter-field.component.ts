import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuantityWordsComponent } from "../quantity-words/quantity-words.component";
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-word-counter-field',
  standalone: true,
  imports: [QuantityWordsComponent, FormsModule, WordCounterFieldComponent],
  templateUrl: './word-counter-field.component.html',
  styleUrl: './word-counter-field.component.css'
})
export class WordCounterFieldComponent {
  wordsOnField: string = ""
  listOfWords: any = []
  arrayWithoutSpaces: any = []
  arrayWithoutNumbers: any = []
  arrayWithoutWords: any = []
  arrayWithOnlyLetters: any = []
  allArray: any = {}
  defaultValue: any
  data: any
  fakeVar: any
  @ViewChild('alerting', { static: true }) alerting!: ElementRef;
  @Output() sendQtyWords = new EventEmitter<any>();

  constructor(private http: MyServiceService){}

  calculateQtyWords(): void {
    this.listOfWords = this.wordsOnField

    this.arrayWithoutSpaces = this.listOfWords.split(' ').filter(function (element: any = []) {
      return element
    })

    console.log(this.arrayWithoutSpaces)

    this.arrayWithoutNumbers = this.arrayWithoutSpaces.filter((x: any = []) => isNaN(x))
    this.arrayWithoutNumbers = this.arrayWithoutNumbers.length

    return this.arrayWithoutNumbers
  }

  calculateQtyNumbers(): void {
    this.arrayWithoutWords = this.arrayWithoutSpaces.filter((x: any = []) => Number(x))
    this.arrayWithoutWords = this.arrayWithoutWords.length

    return this.arrayWithoutWords
  }

  calculateQtyLetters(): void {
    // this.arrayWithOnlyLetters = this.arrayWithoutSpaces.toString()
    // this.arrayWithOnlyLetters = this.arrayWithOnlyLetters.split('')
    // this.arrayWithOnlyLetters = this.arrayWithOnlyLetters.filter((x: any = []) => isNaN(x))
    // this.arrayWithOnlyLetters = this.arrayWithOnlyLetters.length

    // return this.arrayWithOnlyLetters
  }

  separateTypeQty() {
    this.allArray = {
      qtyArrayNoNumber: this.calculateQtyWords(),
      qtyArrayNoWords: this.calculateQtyNumbers(),
      qtyArrayOnlyLetters: this.calculateQtyLetters()
    }

    if (this.allArray.qtyArrayNoNumber == 0 && this.allArray.qtyArrayNoWords == 0) {
      this.alerting.nativeElement.classList.remove('d-none');

      setTimeout(() => {
        this.alerting.nativeElement.classList.add('d-none');
      }, 4500);
    } else {
      return this.sendQtyWords.emit(this.allArray)
    }
  }

  clearTextArea(element: any){
    this.defaultValue = ""
  }

  getData(){
   this.http.buscarListagemUsuarios().subscribe(res => {
    this.data = res
   })
  }

  fakeFunctionAsyncTest(){
     this.fakeVar = 'João'

    setTimeout(()=>{
      this.fakeVar = 'Guizera'
    }, 100)
  }
}
