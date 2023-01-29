import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BuscarPorNombre } from '../interfaces/BuscarPorNombre.interface';
import { BuscarPorCapital } from '../interfaces/BuscarPorCapital.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.com/v3.1';

  private paisUrl:string = 'https://restcountries.com/v3.1';

  private urlREgion:string = 'https://restcountries.com/v2';



  recibiendoData(termino:string):Observable<BuscarPorNombre[]>{
    const url = `${this.apiUrl}/name/${termino}`

    return this.http.get<BuscarPorNombre[]>(url);
  }

  recibiendoDataCapital(termino:string):Observable<BuscarPorCapital[]>{
    const url = `${this.apiUrl}/capital/${termino}`

    return this.http.get<BuscarPorCapital[]>(url);
  }

  paisRecibido(id:string):Observable<BuscarPorNombre[]>{
    const url = `${this.paisUrl}/alpha/${id}`

    return this.http.get<BuscarPorNombre[]>(url);
  }

  paisPorRegion(region:string):Observable<BuscarPorNombre[]>{
    const url = `${this.urlREgion}/regionalbloc/${region}`

    return this.http.get<BuscarPorNombre[]>(url);


  }

  constructor(private http:HttpClient) { }


}
