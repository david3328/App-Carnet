import { Pipe, PipeTransform } from '@angular/core';
declare var jQuery: any;
declare var $: any;
@Pipe({
  name: 'codebar'
})
export class CodebarPipe implements PipeTransform {

  options = {
    barWidth: 2,
    barHeight: 40,
    bgColor: 'transparent',
    moduleSize: 5,
    fontSize:14
  }     

  transform(codigo: any, size:string = '11') {
    this.options.fontSize = Number(size);
    $('#code-' + codigo)
    .html("").show().barcode('0'+codigo, 'code39', this.options)
  }

}
