import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicpipes',
  templateUrl: './basicpipes.component.html',
  styleUrls: ['./basicpipes.component.css']
})
export class BasicpipesComponent implements OnInit {
firstname:string="Sai";
lastname:string="krish";
email:string="test@test.com";
basicstr:string="this is my second app";
dateobj=new Date();

total:number=6.2;
totaltwo:number=6.895689452;
price:number=25;
  constructor() { }

  ngOnInit() {
  }

}
