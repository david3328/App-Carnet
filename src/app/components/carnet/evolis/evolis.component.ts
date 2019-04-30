import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-evolis',
  templateUrl: './evolis.component.html',
  styles: []
})
export class EvolisComponent implements OnInit {
  @Input() alumno:any;
  constructor() {   
  }

  ngOnInit() {   
  }

}
