import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-colegio',
  templateUrl: './colegio.component.html',
  styles: []
})
export class ColegioComponent implements OnInit {
  @Input() alumno:any;
  constructor() {   
   }

  ngOnInit() {  
  }

}
