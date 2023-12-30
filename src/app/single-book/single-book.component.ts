import { Component, Input } from '@angular/core';
import { Book } from '../shared/models/Book';

@Component({
  selector: 'single-book',
  standalone: true,
  imports: [],
  templateUrl: './single-book.component.html',
  styleUrl: './single-book.component.css',
})
export class SingleBookComponent {
  @Input() book!: Book;
}
