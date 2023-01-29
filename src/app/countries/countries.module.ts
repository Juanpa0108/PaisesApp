import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { CapitalComponent } from './pages/capital/capital.component';
import { CountrieComponent } from './pages/countrie/countrie.component';
import { RegionComponent } from './pages/region/region.component';
import { SeeCountrieComponent } from './pages/see-countrie/see-countrie.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from './component/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './component/pais-input/pais-input.component';



@NgModule({
  declarations: [
    CapitalComponent,
    CountrieComponent,
    RegionComponent,
    SeeCountrieComponent,
    PaisTablaComponent,
    PaisInputComponent
  ],
  exports:[
    CapitalComponent,
    CountrieComponent,
    RegionComponent,
    SeeCountrieComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class CountriesModule { }
