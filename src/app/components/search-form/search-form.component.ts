import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Output() onSearch = new EventEmitter();

  startDate = new Date();
  endDate = new Date();

  constructor() { }

  ngOnInit() {
  }

  search() {
    this.onSearch.emit({startDate: this.startDate, endDate: this.endDate});
  }

}
