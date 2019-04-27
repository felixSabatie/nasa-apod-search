import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search(e) {
    this.router.navigate(['/search'], { queryParams: {
      startDate: this.dateToUrlParam(e.startDate),
      endDate: this.dateToUrlParam(e.endDate),
    } });
  }

  dateToUrlParam(date: Date) {
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

}
