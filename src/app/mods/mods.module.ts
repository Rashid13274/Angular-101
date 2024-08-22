import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModsHomeComponent } from './mods-home/mods-home.component';
import { ModelComponent } from './model/model.component';
import { SharedModule } from '../shared/shared.module';
import { AccordianComponent } from './accordian/accordian.component';


@NgModule({
  declarations: [
    ModsHomeComponent,
    ModelComponent,
    AccordianComponent
  ],
  imports: [
    CommonModule,
    ModsRoutingModule,
    SharedModule
  ]
})
export class ModsModule { }
