import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CountrieComponent } from './countries/pages/countrie/countrie.component';
import { RegionComponent } from './countries/pages/region/region.component';
import { CapitalComponent } from './countries/pages/capital/capital.component';
import { SeeCountrieComponent } from './countries/pages/see-countrie/see-countrie.component';

const routes:Routes = [
  {path:'', component: CountrieComponent, pathMatch:"full"},
  {path:'region', component: RegionComponent},
  {path:'capital', component:CapitalComponent},
  {path:'ver-pais/:id', component:SeeCountrieComponent},
  {path:'**', redirectTo:''}
]

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{

}
