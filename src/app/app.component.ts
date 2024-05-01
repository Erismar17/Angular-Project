import { Component, OnInit } from '@angular/core';
import { ModalSwitchService } from './services/modalService/modal-switch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  modalSwitch: boolean = false;

  constructor(private modalSwitchS: ModalSwitchService){

  }

  ngOnInit(){
    this.modalSwitchS.$modal.subscribe((valor)=> {this.modalSwitch = valor});
  }

  openModal() {
    this.modalSwitch = true;
  }
}
