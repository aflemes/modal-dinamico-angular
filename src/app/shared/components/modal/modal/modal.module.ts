import { ModalService } from './../../../services/modal.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent
  ],
  providers: [
    ModalService
  ]
})
export class ModalModule { }
