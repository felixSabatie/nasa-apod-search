import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() modalTitle: string;
  @Input() show = false;

  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.close.emit();
  }

}
