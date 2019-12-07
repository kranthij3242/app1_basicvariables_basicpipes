import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicstructuraldirectives',
  templateUrl: './basicstructuraldirectives.component.html',
  styleUrls: ['./basicstructuraldirectives.component.css']
})
export class BasicstructuraldirectivesComponent implements OnInit {

  students:object=[
    {"id":10,"fullname":"veena","email":"test@test.com","gender":"female"},
    {"id":11,"fullname":"Ram","email":"test1@test.com","gender":"Male"},
    {"id":10,"fullname":"Vishnu","email":"test2@test.com","gender":"MALE"},
    {"id":10,"fullname":"Prakash","email":"test3@test.com","gender":"male"},
    {"id":10,"fullname":"Sita","email":"test4@test.com","gender":"Female"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
