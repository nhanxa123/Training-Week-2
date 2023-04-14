import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
  userScore = 0;
  computerScore = 0;
  userScoreSpan = '';
  resultDiv = '';
  computerScoreSpan = '';

  ngOnInit(): void {
    this.userScoreSpan = ''+this.userScore;
    this.computerScoreSpan = '' + this.computerScore;
    this.resultDiv = `Choose something`;
  }

   playGame(type: string){
    this.game(type);
  }


  // make computer's choice (random choice between those 3 options)
  getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    //Math is a build-in object in JS and random() and floor() are methods that exists in Math object
    //random() gives random decimal numbers between 0 and 1
    // floor() give rounding Numbers 0,1,2 , because the array only has 3 elements
    return choices[randomNumber];
  }


  // compare user's choices againts computer's choices
  game(userChoice: string) {
    const computerChoice = this.getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            this.win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            this.lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            this.draw(userChoice, computerChoice);
            break;
    }
  }

  // check who wins
  // then display the result back on to the DOM
   win(userChoice: string, computerChoice: string) {
    this.userScore++;
    this.userScoreSpan = ''+this.userScore;
    this.resultDiv = ` Your choice: ${this.convertKeyWords(userChoice)} The choice of computer: ${this.convertKeyWords(computerChoice)} 🔥 You win! `;
    this.check(this.userScoreSpan, this.computerScoreSpan);
  }

  lose(userChoice: string, computerChoice: string) {
    this.computerScore++;
    this.computerScoreSpan = ''+this.computerScore;
    this.resultDiv = ` Your choice: ${this.convertKeyWords(userChoice)} The choice of computer: ${this.convertKeyWords(computerChoice)} 🤣 You lose! `;
    this.check(this.userScoreSpan, this.computerScoreSpan);
  }

  draw(userChoice: string, computerChoice: string) {
    this.resultDiv = ` Your choice: ${this.convertKeyWords(userChoice)} The choice of computer: ${this.convertKeyWords(computerChoice)} Tie Score 🤗 `;
    this.check(this.userScoreSpan, this.computerScoreSpan);
  }

  //convert
  convertKeyWords(letter: string) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors"
  }

  // check who wins in total
  checkWinTotal(player: string){
    switch(player){
        case "hooman": {
            alert("You win !!!");
            this.userScore = 0;
            this.computerScore = 0;
            this.userScoreSpan = ''+ this.userScore;
            this.computerScoreSpan = ''+ this.computerScore;
            this.resultDiv = `Choose something`;
            break;
        }
        case "npc": {
            alert("Computer wins");
            this.userScore = 0;
            this.computerScore = 0;
            this.userScoreSpan = ''+ this.userScore;
            this.computerScoreSpan = ''+ this.computerScore;
            this.resultDiv = `Choose something`;
            break;
        }
    }
  }

  check(playerOne: string, playerTwo: string){
    if(playerOne === "2"){
        setTimeout(() => {
            this.checkWinTotal("hooman");
        }, 10)
    }
    else if(playerTwo === "2"){
        setTimeout(() => {
            this.checkWinTotal("npc");
        }, 10);
    }
  }
}
