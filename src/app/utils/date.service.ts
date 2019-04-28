import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {

  dateToUrlParam(date: Date): string {
    let day = '' + date.getDate();
    if (day.length === 1) {
      day = '0' + day;
    }
    let month = '' + (date.getMonth() + 1);
    if (month.length === 1) {
      month = '0' + month;
    }
    const year = '' + date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  differenceInDays(date1: Date, date2: Date): number {
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  addDays(date: Date, nbDays: number): Date {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + nbDays);
    return newDate;
  }

}
