import { Component } from '@angular/core';
import { BuscarPorNombre } from '../../interfaces/BuscarPorNombre.interface';
import { PaisService } from '../../services/pais.service';
import { BuscarPorCapital } from '../../interfaces/BuscarPorCapital.interface';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html'
})
export class CapitalComponent {

  dataEntrante:BuscarPorCapital[] = [];
  hayError:boolean = false;

  enviarDato(termino:string):void{
    this.hayError = false;
    this.dataService.recibiendoDataCapital(termino).subscribe((res:BuscarPorCapital[])=>{
      this.dataEntrante = res;
    }, (err) =>{
      this.hayError = true;
      this.dataEntrante = [];
    }
    )
  }

  sugerencias(termino:string){
    this.hayError = false;
  }

  constructor(private dataService:PaisService){}

}
