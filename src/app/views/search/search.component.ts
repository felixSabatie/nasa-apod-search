import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NasaApiService } from 'src/app/services/nasa-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  startDate: Date;
  endDate: Date;

  constructor(private route: ActivatedRoute, private nasaApiService: NasaApiService) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      this.startDate = new Date(queryParams.get('startDate'));
      this.endDate = new Date(queryParams.get('endDate'));

      this.search();
    });
  }

  search() {
    this.nasaApiService.search(this.startDate, this.endDate).subscribe(apodInfos => {
      console.log(apodInfos);
    });
  }

}
