import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent implements OnInit {
  @Input() conta=0;
  @Output() respuesta:EventEmitter<number> =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  sumar(){
  this.conta++;    
  console.log(this.conta);
  this.respuesta.emit(this.conta);

  }

}


 
