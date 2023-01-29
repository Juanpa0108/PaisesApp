import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { BuscarPorNombre } from '../../interfaces/BuscarPorNombre.interface';

@Component({
  selector: 'app-countrie',
  templateUrl: './countrie.component.html'

})
export class CountrieComponent  {

  dataEntrante:BuscarPorNombre[] = [];
  hayError:boolean = false;

  enviarDato(termino:string):void{
    this.hayError = false;
    this.dataService.recibiendoData(termino).subscribe((res:BuscarPorNombre[])=>{
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
