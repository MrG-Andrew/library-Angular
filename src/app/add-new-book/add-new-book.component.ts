import {
  Component,
  EventEmitter,
  inject,
  Output,
  TemplateRef,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Book } from '../shared/models/Book';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'add-new-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-new-book.component.html',
  styleUrl: './add-new-book.component.css',
})
export class AddNewBookComponent {
  @Output() addBook = new EventEmitter<Book>();
  private modalService = inject(NgbModal);
  closeResult = '';
  errorMsg = '';
  newBook: Book = {
    id: 0,
    title: '',
    author: '',
    description: '',
  };

  open(content: TemplateRef<any>) {
    this.errorMsg = '';
    this.modalService.open(content);
  }

  addNewBook(bookForm: NgForm) {
    if (bookForm.valid) {
      this.addBook.emit(this.newBook);
      this.newBook = {
        id: 0,
        title: '',
        author: '',
        description: '',
      };
      bookForm.reset();
      this.modalService.dismissAll();
    } else {
      this.errorMsg = 'All fields are required!';
    }
  }
}
