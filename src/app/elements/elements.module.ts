import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { DividerComponent } from '../shared/divider/divider.component';
import { SharedModule } from '../shared/shared.module';
import { SegmentComponent } from './segment/segment.component';
import { TimesDirective } from './times.directive';


@NgModule({
  declarations: [
    ElementsHomeComponent,
    PlaceholderComponent,
    SegmentComponent,
    TimesDirective,
    
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ],
  exports:[]
})
export class ElementsModule { }
