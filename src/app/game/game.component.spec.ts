import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameComponent } from './game.component';


describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  class LoggMocke {
    public alert = jest.fn();
  }

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
      expect(window.alert).toBeCalledWith("You: R , Computer: S ==> You win")
    });

    it("win when case is ps", () => {
      const userChoice = 'p';
      const computerChoice = 's';
      component.game(userChoice);
      component.win(userChoice, computerChoice);
      expect(window.alert).toBeCalledWith("You: P , Computer: S ==> Computer win")
    });

    it("win when case is sp", () => {
      const userChoice = 's';
      const computerChoice = 'p';
      component.game(userChoice);
      component.win(userChoice, computerChoice);
      expect(window.alert).toBeCalledWith("You: S , Computer: P ==> You win")
    });

    it("lose when case is rp", () => {
      const userChoice = 'r';
      const computerChoice = 'p';
      component.game(userChoice);
      component.lose(userChoice, computerChoice);
      expect(window.alert).toBeCalledWith("You: R , Computer: P ==> Computer win")
    })

    it("lose when case is ps", () => {
      const userChoice = 'p';
      const computerChoice = 's';
      component.game(userChoice);
      component.lose(userChoice, computerChoice);
      expect(window.alert).toBeCalledWith("You: P , Computer: S ==> Computer win")
    })

    it("lose when case is sr", () => {
      const userChoice = 's';
      const computerChoice = 'r';
      component.game(userChoice);
      component.lose(userChoice, computerChoice);
      expect(window.alert).toBeCalledWith("You: S , Computer: R ==> Computer win")
    })


    it("draw when case is rr", () => {
      const userChoice = 'r';
      const computerChoice = 'r';
      component.game(userChoice);
      component.draw(userChoice, computerChoice);
      expect(window.alert).toBeCalledWith("You: R , Computer: R ==> Draw")
    })

    it("draw when case is pp", () => {
      const userChoice = 'p';
      const computerChoice = 'p';
      component.game(userChoice);
      component.draw(userChoice, computerChoice);
      expect(window.alert).toBeCalledWith("You: P , Computer: P ==> Draw")
    })

    it("draw when case is ss", () => {
      const userChoice = 's';
      const computerChoice = 's';
      component.game(userChoice);
      component.draw(userChoice, computerChoice);
      expect(window.alert).toBeCalledWith("You: S , Computer: S ==> Draw")
    })


  })

  describe("check", () => {
    it("player one has two point", () => {
      component.check("2", "1");
      component.checkWinTotal("hooman");
      expect(window.alert).toBeCalledWith("You win in total")
    });
  })
  describe("check", () => {
    it("player one has two point", () => {
      component.check("2", "0");
      component.checkWinTotal("hooman");
      expect(window.alert).toBeCalledWith("You win in total")
    });
  })


  describe("check", () => {
    it("Computer has two point, You have one point", () => {
      component.check("1", "2");
      component.checkWinTotal("npc");
      expect(window.alert).toBeCalledWith("Computer win in total")
    });
  })

  describe("check", () => {
    it("computer has two point, you have zero point", () => {
      component.check("0", "2");
      component.checkWinTotal("npc");
      expect(window.alert).toBeCalledWith("Computer win in total")
    });
  })

  describe(" Check case computer win", () =>{
    it("Computer Win", () =>{
      component.checkWinTotal("npc");
      expect(window.alert).toHaveBeenCalledWith("computer wins");
    })
  })
  
  describe("Check alert", () => {
    it('alert', function(done) {
      jest.spyOn(window, "alert");
      component.check("2", "1");
      setTimeout(function() {
        expect(window.alert).toHaveBeenCalledWith("You win !!!");
        done();
      }, 10);
    });
  })
  
});
