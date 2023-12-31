import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'search-bar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  @Input() search: any;
  @Output() searchChange = new EventEmitter();

  searchValue: string = '';

  onSearchChange(value: string) {
    this.search = value;
    this.searchChange.emit(this.search);
  }

  clearSearch() {
    this.search = '';
    this.searchValue = '';
    this.searchChange.emit('');
  }
}
