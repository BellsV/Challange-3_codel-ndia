import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{

  @Input()
  backgroundColor:string = '';
  @Input()
  titleBody:string= '';
  @Input()
  textBody:string='';


  constructor(){}
  ngOnInit(): void {

  }

}
