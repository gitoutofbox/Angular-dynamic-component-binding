import { Injectable, InjectionToken } from '@angular/core';
import { ActionEditComponent } from 'src/app/components/action-edit/action-edit.component';
import { ActionDeleteComponent } from 'src/app/components/action-delete/action-delete.component';


@Injectable({ providedIn: 'root' })
export class ComponentLoaderService {
    constructor() { }
    public static getComponent =  {        
            'ActionEditComponent': ActionEditComponent,
            'ActionDeleteComponent': ActionDeleteComponent        
    }
}