import { fade } from './../../../animations/fade';
import { Component, HostBinding, OnInit, TemplateRef } from '@angular/core';
import { ModalConfig } from '../../interface/modal-config';
import { ModalRef } from '../../models/model-ref';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fade]
})
export class ModalComponent implements OnInit {
  @HostBinding('@fade') fade = true;
  public config!: ModalConfig;
  public modalRef!: ModalRef;

  constructor(){

  }

  ngOnInit(): void {
  }

}
