import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { BuscarPorNombre } from '../../interfaces/BuscarPorNombre.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-see-countrie',
  templateUrl: './see-countrie.component.html',
  styles: [`
  .bandera{
    width:250px
  }
`]
})
export class SeeCountrieComponent implements OnInit {

  dataEntrante:BuscarPorNombre[] = [];

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({id})=> this.servicio.paisRecibido(id))
      )
    .subscribe(res=>{
      this.dataEntrante = res;
    })

  }

  constructor(private activatedRoute:ActivatedRoute, private servicio:PaisService) { }

}
