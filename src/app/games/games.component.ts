import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    @if (isLoggedIn){
    <h3>{{ username }}'s favorite games:</h3>
    <ul>
      @for (game of games; track game.id) {
      <li>{{ game.name }}</li>
      }
    </ul>
    }
  `,
  styles: ``,
})
export class GamesComponent {
  @Input() isLoggedIn = false;
  @Input() username = '';
  games = [
    {
      id: 1,
      name: 'Mario',
    },
    {
      id: 2,
      name: 'Zelda',
    },
    {
      id: 3,
      name: 'Pokemon',
    },
  ];
}
