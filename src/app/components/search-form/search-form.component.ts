import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Output() launchSearch = new EventEmitter();
  @Output() launchRandom = new EventEmitter();
  @Input() defaultStartDate: Date;
  @Input() defaultEndDate: Date;

  today = new Date();
  startDate = new Date();
  endDate = new Date();
  minDate = new Date('1995-06-16');

  constructor() { }

  ngOnInit() {
    if (this.defaultStartDate) {
      this.startDate = this.defaultStartDate;
    }
    if (this.defaultEndDate) {
      this.endDate = this.defaultEndDate;
    }
  }

  search() {
    this.launchSearch.emit({startDate: this.startDate, endDate: this.endDate});
  }

  random() {
    this.launchRandom.emit();
  }

}
