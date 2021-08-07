import { ModalService } from './shared/services/modal.service';
import { Component, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { ModalRef } from './shared/components/models/model-ref';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'angular-acessbilidade-avancado';

  public modalRef!: ModalRef;

  @ViewChild('modal') public modalTemplateRef!: TemplateRef<any>;
  public firstName = "Allan";
  public formGroup!: FormGroup;

  constructor(private modalService: ModalService,private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      firstName: ['Allan',Validators.required],
      surname: ['',Validators.required],
      age: ["", Validators.required]
    });
  }

  public show(): void{
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details'
    });
  }

  public submit(){
    console.log("submit called");
    console.log(this.formGroup);
    this.modalRef.close();
  }

}
