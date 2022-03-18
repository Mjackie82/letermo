import { Component,} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Letermo';

  // var to generate a rows
  generateRows = ['','','','','','']


  //
  answer = 'PINTO';

  words = [
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
  ];

  currentRow:number = 1;
  currentBox:number = 1;

  OnSend(letter:string){

    if(this.currentBox >= 1 && this.currentBox <= 5){
      this.words[this.currentRow - 1][this.currentBox - 1] = letter.toUpperCase();
      console.log(this.words)
      let tile = document.getElementById('row' + this.currentRow + 'Box' + this.currentBox)!;
      tile.setAttribute('value', letter);
      this.currentBox++;
      letter = '';
      //tile.style.borderBottom = '5px solid black'
    }

  }

  Delete(){
   if(this.currentBox > 1){
    this.currentBox--;
    this.words[this.currentRow - 1][this.currentBox - 1] = '';
    let tile = document.getElementById('row' + this.currentRow + 'Box' + this.currentBox)!;
    tile.setAttribute('value', '');
    tile.style.borderBottom = '1px solid purple'
   }


  }

  EnterWord(){
    let tile = document.getElementById('row' + this.currentRow + 'Box5')!;
    if(this.currentBox == 6){
      const word = this.words[this.currentRow-1].join('')

      if(word === this.answer){
        this.showMessage('Ala o cara, acertou msm, Parabéns :)')
      }else{
        this.currentRow++;
        this.currentBox = 1;
      }
    }else{
      this.error();
    }

  }

  showMessage(message:string){
    console.log(message)

  }

  error(){
    let row = document.getElementById('row'+ this.currentRow);
    row!.style.animation = 'error 1s ';
    setTimeout(() => {
      row!.style.animation = '';
    },1000)
  }

    ngOnInit(){}


}

