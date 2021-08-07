import { BodyInjectorService } from './body-injector.service';
import { ModalComponent } from './../components/modal/modal/modal.component';
import { ModalConfig } from '../components/interface/modal-config';
import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector, TemplateRef } from '@angular/core';
import { ModalRef } from '../components/models/model-ref';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private componentFactory!: ComponentFactory<ModalComponent>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private injector: Injector, private bodyInjector: BodyInjectorService) {
    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);

  }

  public open(config: ModalConfig): ModalRef {
    const componentRef = this.createComponentRef();
    componentRef.instance.config = config;
    this.bodyInjector.stackBeforeAppRoot(componentRef);
    const modalRef = new ModalRef(componentRef);
    componentRef.instance.modalRef = modalRef;

    return modalRef;
  }

  private createComponentRef(): ComponentRef<ModalComponent> {
    return this.componentFactory.create(this.injector);
  }
}
