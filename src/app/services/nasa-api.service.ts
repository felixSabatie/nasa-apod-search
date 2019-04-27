import { Injectable } from '@angular/core';
import { DateService } from '../utils/date.service';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import apiConfig from '../../api-config.json';
import { ApodInfos } from '../models/ApodInfos.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  constructor(private http: HttpClient, private dateService: DateService) { }

  search(startDate: Date = new Date(), endDate: Date = new Date()): Observable<ApodInfos[]> {
    const startDateUrl = this.dateService.dateToUrlParam(startDate);
    const endDateUrl = this.dateService.dateToUrlParam(endDate);
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiConfig.key}&start_date=${startDateUrl}&end_date=${endDateUrl}`;

    return this.http.get<any>(url)
      .pipe(map((response: Array<any>) => response.map(rawApod => {
        return {
          ...rawApod,
          date: new Date(Date.parse(rawApod.date)),
          mediaType: rawApod.media_type,
        } as ApodInfos;
      })));
  }
}
