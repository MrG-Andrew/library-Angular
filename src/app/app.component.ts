import { BookService } from './book.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookModalComponent } from './book-modal/book-modal.component';
import { AddNewBookComponent } from './add-new-book/add-new-book.component';
import { EventService } from './shared/models/services/EventService';
import { Book } from './shared/models/Book';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SearchBarComponent,
    BookListComponent,
    BookModalComponent,
    AddNewBookComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  books!: Book[];

  constructor(events: EventService, private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe((books: Book[]) => {
      this.books = books;
    });
  }
}
