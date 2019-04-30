import { Component } from '@angular/core';
import { CarnetService } from 'src/app/services/carnet.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  tipo:number;
  alumnos:any[];
  alumnosFiltrados:any[];
  codigos:string='';

  constructor(
    private carnet:CarnetService
  ) {
    this.tipo = 1;
    this.getAlumnos();
  }

  getAlumnos(){
    this.carnet.getAlumnos()
    .subscribe(alumnos=>{
      this.alumnos = alumnos;      
      this.filtrar();
    })
  }

  filtrar(){this.alumnosFiltrados = this.alumnos.filter(el=>el.tipo_carne==this.tipo)}
  remover(i:number){this.alumnosFiltrados.splice(i,1);}
  Imprimir(){window.print()}

  Adicionar(){
    if(this.codigos==='') return;
    let tipo = this.tipo == 1 ? '1':'2';
    let codigos = '{'+this.codigos+'}';
    this.carnet.adicionarAlumnos(codigos,tipo)
      .subscribe(alumnos => {
        alumnos.map(el => {
          let count = 0;
          this.alumnos.map(al => {
            if (al.codigo == el.codigo) count++
          })
          if (count == 0) this.alumnos.push(el)
        })
        this.codigos = '';
        this.filtrar();
      })
  }

  Guardar(){
    let set = new Set(this.alumnosFiltrados.map(el=>el.idcarne))
    let codigos = new Set(this.alumnosFiltrados.map(el=>el.codigo))
    let arrcodigos = Array.from(codigos); // array de elementos que se quitaran de la lista de alumnos
    let array = Array.from(set).filter(el => el != undefined);
    console.log(array.join(',')); // array de elementos que se eliminaran 
    this.carnet.guardarAlumnos(array.join(','))
      .subscribe((resultado:any) => {
        if(resultado.success){
          this.alumnos = this.alumnos.filter(el => !arrcodigos.includes(el.codigo))
          this.alumnosFiltrados = [];
        }
      })    
  }


}
