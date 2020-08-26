import { Component } from '@angular/core';
import { lorem } from 'faker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //create random texts from lorem package
  randomText = lorem.sentence();

  enteredText = '';

  //if the game is solved or not
  solved=false

  //method to check the user input
  onInput(value:string){
    this.enteredText = value;
    if(value === this.randomText){
      this.solved=true;
    }
  }

  //method to compare between each letter of enteredText and each letter of ramdonText
  compare(enteredLetter: string, randomLetter: string){
    if (!enteredLetter) {
      return 'pending';
    }
    
    return randomLetter === enteredLetter ? 'correct' : 'incorrect'
  }

}
