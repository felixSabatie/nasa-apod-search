import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NasaApiService } from 'src/app/services/nasa-api.service';
import { ApodInfos } from 'src/app/models/ApodInfos.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  startDate: Date;
  endDate: Date;
  apods: ApodInfos[];

  constructor(private route: ActivatedRoute, private nasaApiService: NasaApiService) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      // TODO check if dates are valid
      this.startDate = new Date(queryParams.get('startDate'));
      this.endDate = new Date(queryParams.get('endDate'));

      this.search();
    });
  }

  search() {
    // TODO limit number of images requested
    this.nasaApiService.search(this.startDate, this.endDate).subscribe(apods => {
      this.apods = apods;
    });
  }

}
