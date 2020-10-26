import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'raad-het-getal';

  randomNumber: number = Math.ceil(Math.random() * 100);
  aantalBeurten: number = 1;
  feedback: string = null;
  eindeSpel: boolean = false;
  melding: string = "";

  valideerGok(value) {
    if(value == this.randomNumber){
      this.feedback = "Proficiat, u heeft het getal na " + this.aantalBeurten + " beurt(en) geraden!";
      this.eindeSpel = true;
    } else if(value < this.randomNumber){
      this.feedback = "uw gok is te laag.";
      this.eindeSpel = this.aantalBeurten >= 10;
    } else {
      this.feedback = "uw gok is te hoog.";
      this.eindeSpel = this.aantalBeurten >= 10;
    }
    this.melding += 'Gokwaarde ' + this.aantalBeurten + ' is: ' + value + ' <br/>'; 
    document.getElementById("comment").innerHTML = this.melding;
    this.aantalBeurten++;
  }

  reset(){
    this.randomNumber = Math.ceil(Math.random()*100);
    this.aantalBeurten = 1;
    this.feedback = null;
    this.eindeSpel = false;
    this.melding = "";
    document.getElementById("comment").innerHTML = this.melding;
  }
}
