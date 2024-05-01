import { Component, OnInit } from '@angular/core';
import { ModalSwitchService } from 'src/app/service/modal-switch.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  constructor(private modalSwitchS: ModalSwitchService) {

  }

  ngOnInit(): void {
    
  }

  closeModal () {
    this.modalSwitchS.$modal.emit(false);
  }
}