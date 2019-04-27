import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NasaApiService } from 'src/app/services/nasa-api.service';
import { ApodInfos } from 'src/app/models/ApodInfos.model';
import { DateService } from 'src/app/utils/date.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  startDate: Date;
  endDate: Date;
  apods: ApodInfos[];
  fetching = false;
  error = false;

  constructor(private route: ActivatedRoute, private nasaApiService: NasaApiService,
              private router: Router, private dateService: DateService) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      this.startDate = new Date(queryParams.get('startDate'));
      this.endDate = new Date(queryParams.get('endDate'));

      if (isNaN(this.startDate.getTime()) || isNaN(this.endDate.getTime()) || this.startDate > this.endDate) {
        this.error = true;
      } else {
        this.searchApi();
      }
    });
  }

  searchApi() {
    // TODO limit number of images requested
    this.fetching = true;
    this.nasaApiService.search(this.startDate, this.endDate).subscribe(apods => {
      this.apods = apods;
      this.fetching = false;
    });
  }

  search(e) {
    this.router.navigate(['/search'], { queryParams: {
      startDate: this.dateService.dateToUrlParam(e.startDate),
      endDate: this.dateService.dateToUrlParam(e.endDate),
    } });
  }

}
