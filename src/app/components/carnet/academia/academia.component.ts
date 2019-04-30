import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-academia',
  templateUrl: './academia.component.html',
  styles: []
})
export class AcademiaComponent implements OnInit {
  @Input() alumno:any;

  constructor() {    
  }

  ngOnInit() {  
  }

}
