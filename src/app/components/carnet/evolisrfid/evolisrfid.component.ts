import { Component, OnInit, Input } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-evolisrfid',
  templateUrl: './evolisrfid.component.html',
  styles: []
})
export class EvolisrfidComponent implements OnInit {
  @Input() alumno:any;

  constructor() {   
  }

  ngOnInit() {  
  }

}
