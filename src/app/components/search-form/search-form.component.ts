import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  startDate = new Date();
  endDate = new Date();

  constructor() { }

  ngOnInit() {
  }

}
