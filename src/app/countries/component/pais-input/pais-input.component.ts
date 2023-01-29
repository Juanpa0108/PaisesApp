import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit {

  @Input() placeholder!:string;
  @Output() onEnviar:EventEmitter<string>= new EventEmitter();
  @Output() onDebounce:EventEmitter<string> = new EventEmitter();
  busqueda!:string;

  debounce:Subject<string> = new Subject();

  ngOnInit(): void {
    this.debounce.pipe( debounceTime(300) ).subscribe(valor=>
      {
      this.onDebounce.emit(valor);
      })

  }

  enviarDato(){
  this.onEnviar.emit(this.busqueda);
  }

  teclaPresionada(){
    // const valor = event.target.value;
    // console.log(valor);
    this.debounce.next(this.busqueda);
  }



}
