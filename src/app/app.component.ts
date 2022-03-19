import { Component,} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Letermo';

  // var to generate a rows
  generateRows:string[] = ['','','','','','']

  // game var
  answer:string = 'PINTO';
  isGameOver:boolean = false


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
    if(this.currentBox == 6){
      const word = this.words[this.currentRow-1].join('')

      if(word === this.answer){
        this.showMessage('Deveras legal!')
        this.isGameOver = true;
        return
      }else{
        if(this.currentRow < 6){
          this.currentRow++;
          this.currentBox = 1;
        }
        else if(this.currentRow >= 6){
          this.showMessage('É o fim, filhote! ;-;')

        }

      }
    }else{
      this.error();
    }

  }

  showMessage(message:string){

    const messageDisplay:Element = document.querySelector('.message-container')!;
    const messageElement = document.createElement('p');

    messageElement.textContent = message;
    messageElement.style.cssText = "margin:0;background-color:grey;color:white;padding:10px;border-radius:10px;";
    messageDisplay.append(messageElement);

    setTimeout(() => messageDisplay.removeChild(messageElement), 2000)


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

