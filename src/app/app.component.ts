import { BookService } from './book.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BookListComponent } from './book-list/book-list.component';
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
    AddNewBookComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  books!: Book[];
  search: any;

  constructor(events: EventService, private bookService: BookService) {
    events.listen('removeBook', (book) => {
      let bookIndex = this.books.indexOf(book);
      this.books.splice(bookIndex, 1);
    });
  }

  ngOnInit() {
    this.bookService.getBooks().subscribe((books: Book[]) => {
      this.books = books;
    });
  }

  filteredBooks() {
    if (this.search) {
      return this.books.filter((book) => {
        return book.title.toLowerCase().includes(this.search.toLowerCase());
      });
    } else {
      return this.books;
    }
  }
}
