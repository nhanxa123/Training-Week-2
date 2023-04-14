import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameComponent ],
      providers: []
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("playgame", () => {
    it("should call func game", () => {
      const type = 's';
      component.playGame(type);
    });
  });

  describe("wincase",() =>{
    it("win when case is rs", () => {
      const userChoice = 'r';
      const computerChoice = 's';
      component.game(userChoice);
      component.win(userChoice, computerChoice);
    });

    it("win when case is ps", () => {
      const userChoice = 'p';
      const computerChoice = 's';
      component.game(userChoice);
      component.win(userChoice, computerChoice);
    });

    it("win when case is sp", () => {
      const userChoice = 's';
      const computerChoice = 'p';
      component.game(userChoice);
      component.win(userChoice, computerChoice);
    });

    it("lose when case is rp", () => {
      const userChoice = 'r';
      const computerChoice = 'p';
      component.game(userChoice);
      component.lose(userChoice, computerChoice);
    })

    it("lose when case is ps", () => {
      const userChoice = 'p';
      const computerChoice = 's';
      component.game(userChoice);
      component.lose(userChoice, computerChoice);
    })

    it("lose when case is sr", () => {
      const userChoice = 's';
      const computerChoice = 'r';
      component.game(userChoice);
      component.lose(userChoice, computerChoice);
    })


    it("draw when case is rr", () => {
      const userChoice = 'r';
      const computerChoice = 'r';
      component.game(userChoice);
      component.draw(userChoice, computerChoice);
    })

    it("draw when case is pp", () => {
      const userChoice = 'p';
      const computerChoice = 'p';
      component.game(userChoice);
      component.draw(userChoice, computerChoice);
    })

    it("draw when case is ss", () => {
      const userChoice = 's';
      const computerChoice = 's';
      component.game(userChoice);
      component.draw(userChoice, computerChoice);
    })


  })

  describe("check", () => {
    it("player one has two point", () => {
      component.check("2", "1");
      component.checkWinTotal("hooman");
    });
  })
  describe("check", () => {
    it("player one has two point", () => {
      component.check("2", "0");
      component.checkWinTotal("hooman");
    });
  })


  describe("check", () => {
    it("player one has two point", () => {
      component.check("1", "2");
      component.checkWinTotal("npc");
    });
  })

  describe("check", () => {
    it("player one has two point", () => {
      component.check("0", "2");
      component.checkWinTotal("npc");
    });
  })

  describe(" Check case computer win", () =>{
    it("Computer Win", () =>{
      component.checkWinTotal("npc")
    })
  })
  describe("Check timeout", () => {
    it('timeout', function(done) {
      component.check;
      component.checkWinTotal;
  
      setTimeout(function() {
        expect(component.check).toEqual(true);
        done();
      }, 10);
    });
  })
  
});
