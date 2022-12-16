import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  table: string[] = [];
  secondClick: string[] = [];
  message = '';

  ngOnInit() {}

  reset() {
    this.table = [];
    this.secondClick = [];
  }

  combinaisons() {
    let combinaisons = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [7, 5, 3],
    ];
    let t = ['X', 'O'];
    t.forEach((joueur_X) => {
      combinaisons.forEach((eltCom) => {
        let verif = true;
        eltCom.forEach((elt) => {
          if (!(this.table[elt - 1] == joueur_X)) verif = false;
        });
        if (verif == true) {
          this.message = joueur_X + ': Won the Game';

          console.log(eltCom);
        } else {
          verif = true;
        }
      });
    });
  }

  onClick(s: string) {
    let t = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9'];

    t.forEach((element) => {
      if (s == element) {
        if (this.secondClick.length % 2 == 0 && !this.secondClick.includes(s)) {
          this.table[t.indexOf(element)] = 'O';
          this.secondClick.push(s);
        }
        if (this.secondClick.length % 2 != 0 && !this.secondClick.includes(s)) {
          this.table[t.indexOf(element)] = 'X';
          this.secondClick.push(s);
        }
      }
    });

    this.combinaisons();
    // switch (s) {
    //   case 'c1':
    //     if (this.secondClick.length % 2 == 0 && !this.secondClick.includes(s)) {
    //       this.table[0] = '0'
    //       this.secondClick.push(s)
    //     } else if (
    //       this.secondClick.length % 2 != 0 &&
    //       !this.secondClick.includes(s)
    //     ) {
    //       this.table[0] = 'X'
    //       this.secondClick.push(s)
    //     }
    //     break;

    //   case 'c2':
    //     if (this.secondClick.length % 2 == 0 && !this.secondClick.includes(s)) {
    //       this.table[1] = '0'
    //       this.secondClick.push(s)

    //     } else if (
    //       this.secondClick.length % 2 != 0 &&
    //       !this.secondClick.includes(s)
    //     ) {
    //       this.table[1] = 'X'
    //       this.secondClick.push(s)

    //     }
    //     break;

    //     case 'c3':
    //     if (this.secondClick.length % 2 == 0 && !this.secondClick.includes(s)) {
    //       this.table[2] = '0'
    //       this.secondClick.push(s)

    //     } else if (
    //       this.secondClick.length % 2 != 0 &&
    //       !this.secondClick.includes(s)
    //     ) {
    //       this.table[2] = 'X'
    //       this.secondClick.push(s)

    //     }
    //     break;

    //   default:
    //     break;
    // }
  }
}
