import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarnetService {
  alumnos:any[];
  rfid:string;
  url:string;
  constructor(
    private http:HttpClient
  ) { 
    this.rfid = '17286,16649,17312,17868,16209,16254,16425,16250,16786,16961,18035,17657,18245,18149,16788,16595,16973,17441,16343,16075,16922,16307,16199,16747,17025,16306,18038,16920,16397';
    this.url = 'http://intranet.cima.com.pe:3000/api/cimapersonal/carne/';
  }

  getQuery(query:string){
    const url = this.url + query;
    return this.http.get(url);
  }

  getAlumnos(){
    return this.getQuery('imprimir')
    .pipe(map(data=>{
      if(!data['data']) return [];
      data['data'].map(el=>{
        if (el.grado === "6°" && el.idsede === 2) el.tipo_carne = 4;
        if (this.rfid.indexOf(el.codigo) >= 0) el.tipo_carne = 4;
        if (el.nivel === "INICIAL") el.tipo_carne = 5;
      })
      return data['data'];
    }))    
  }

  adicionarAlumnos(codigos:string,tipo:string){
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url+'adicionales',{codigos,tipo},{headers})
      .pipe(map(data => {
        if (!data['data']) return [];
        data['data'].map(el => {
          if (el.grado === "6°" && el.idsede === 2) el.tipo_carne = 4;
          if (this.rfid.indexOf(el.codigo) >= 0) el.tipo_carne = 4;
          if (el.nivel === "INICIAL") el.tipo_carne = 5;
        })
        return data['data'];
      })) 
  }
  
  guardarAlumnos(codigos:string){
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url+'guardar',{codigos},{headers})
  }
 
}
