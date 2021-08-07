import { ModalComponent } from './../modal/modal/modal.component';
import { ComponentRef } from '@angular/core';
export class ModalRef {

  constructor(private componentRef: ComponentRef<ModalComponent>) {

  }
  public close(): void {
    console.log("closed called");
    this.componentRef.destroy();
  }
}
