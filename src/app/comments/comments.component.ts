import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comments</h3>
    <img
      src="https://media.npr.org/assets/img/2023/01/14/this-is-fine_wide-0077dc0607062e15b476fb7f3bd99c5f340af356-s1400-c100.jpg"
      alt="this is fine"
    />
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit
      minus voluptate recusandae rem accusamus dolore consectetur inventore
      exercitationem? Necessitatibus cum quo voluptatum vero sapiente voluptas
      dolorem inventore cupiditate deserunt eius.
    </p>
  `,
  styles: ``,
})
export class CommentsComponent {}
