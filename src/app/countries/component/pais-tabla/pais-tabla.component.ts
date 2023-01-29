import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [`
    .bandera{
      width:50px
    }
  `]
})
export class PaisTablaComponent  {

@Input() dataEntrante:any[] = [];
@Input() hayError!:boolean;


  constructor() { }



}
