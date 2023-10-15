import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  @Input()
  title:string = '';
  @Input()
  description:string = '';
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
