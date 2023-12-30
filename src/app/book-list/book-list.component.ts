import { Component, Input } from '@angular/core';
import { Book } from '../shared/models/Book';
import { SingleBookComponent } from '../single-book/single-book.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'book-list',
  standalone: true,
  imports: [CommonModule, SingleBookComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  @Input() books: Book[] = [];
}
