import {
  Component,
  inject,
  TemplateRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Book } from '../shared/models/Book';
import { EventService } from '../shared/models/services/EventService';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'single-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './single-book.component.html',
  styleUrl: './single-book.component.css',
})
export class SingleBookComponent {
  constructor(private events: EventService) {}

  @Input() book!: Book;
  @Output() bookEdited = new EventEmitter<Book>();
  isButtonActive: boolean = false;
  bookCopy!: Book;

  private modalService = inject(NgbModal);
  closeResult = '';
  errorMsg = '';

  open(content: TemplateRef<any>) {
    this.bookCopy = { ...this.book };
    this.modalService.open(content);
  }

  removeBook() {
    this.events.emit('removeBook', this.book);
  }

  editBook() {
    if (
      this.bookCopy.title &&
      this.bookCopy.author &&
      this.bookCopy.description
    ) {
      this.modalService.dismissAll();
      this.bookEdited.emit(this.bookCopy);
      this.book = this.bookCopy;
      this.errorMsg = '';
    } else {
      this.errorMsg = 'All fields are required!';
    }
  }
}
