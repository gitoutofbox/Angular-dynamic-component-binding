import { Component,ViewContainerRef,  Input, OnInit, ViewChild, ComponentFactoryResolver, AfterViewInit } from '@angular/core';
import { ComponentLoaderService } from 'src/app/services/component-loader.service';
@Component({
  selector: 'app-component-loader',
  templateUrl: './component-loader.component.html',
  styleUrls: ['./component-loader.component.sass']
})
export class ComponentLoaderComponent implements OnInit, AfterViewInit {
  @Input() rendercomponent: any;
  @Input() data: any;
  @ViewChild('componentHost', {static: true, read: ViewContainerRef} as any) componentHost: ViewContainerRef;
  private AllComponents = ComponentLoaderService.getComponent;


  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
  
  ngAfterViewInit() {
    this.loadComponent();
  }
  ngOnInit() {
    
  }

  loadComponent() {
    if(typeof this.componentHost !== 'undefined'){      
      for(const component of this.rendercomponent) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.AllComponents[component]);
        const componentRef = this.componentHost.createComponent(componentFactory);
        (<any>componentRef.instance).data = this.data;
      }
    }
  }


}
