import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DateService } from 'src/app/utils/date.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private dateService: DateService) { }

  ngOnInit() {
  }

  search(e) {
    this.router.navigate(['/search'], { queryParams: {
      startDate: this.dateService.dateToUrlParam(e.startDate),
      endDate: this.dateService.dateToUrlParam(e.endDate),
    } });
  }

  random() {
    this.router.navigate(['/search'], { queryParams: {
      random: true,
    } });
  }

}
