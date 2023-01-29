import { Component} from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { BuscarPorNombre } from '../../interfaces/BuscarPorNombre.interface';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [`
    button{
      margin-right:5px;
    }`
  ]
})
export class RegionComponent  {

  regiones:string[] = [ "EU","EFTA","CARICOM","PA","AU","USAN","EEU","AL","ASEAN","CAIS","CEFTA","NAFTA","SAARC"];
  regionActiva:string = '';
  tabla:BuscarPorNombre[] = [];




  constructor(private miServicio:PaisService) { }

  activarRegion ( region:string){
    this.regionActiva = region;
    this.miServicio.paisPorRegion(region).subscribe(res=>{
      console.log(res);
      this.tabla = res;
    })
  }

  claseCss(region:string):string{
    return (this.regionActiva === region) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }
}
