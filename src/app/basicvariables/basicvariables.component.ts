import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicvariables',
  templateUrl: './basicvariables.component.html',
  styleUrls: ['./basicvariables.component.css']
})
export class BasicvariablesComponent implements OnInit {
  firstname:string="kranthi";
  sno:number=890;
  isfound:boolean=true;
  studentobj:object={"id":10,"fullname":"kishore","email":"test@test.com"};
  basic_any:any="hai";

  constructor() { }

  ngOnInit() {
  }

}
