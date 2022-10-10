import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/data/data';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {

  @Output() deleteEmitter = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
