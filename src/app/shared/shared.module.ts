import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';

import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    SideBarComponent
  ],
  exports:[
    SideBarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
