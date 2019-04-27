import { Component, OnInit, Input } from '@angular/core';
import { ApodInfos } from 'src/app/models/ApodInfos.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {
  @Input() apod: ApodInfos;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
