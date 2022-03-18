import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  letterToSend!:string;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() LetterSend = new EventEmitter();

  @Output() delLetter = new EventEmitter();

  @Output() EnterWord = new EventEmitter();

  send(letter:string){
    this.letterToSend = letter;
    this.LetterSend.emit(this.letterToSend);
  }

  del(){
    this.delLetter.emit();
  }

  Enter(){
    this.EnterWord.emit();
  }
}
