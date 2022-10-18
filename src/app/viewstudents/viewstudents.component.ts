import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstudents',
  templateUrl: './viewstudents.component.html',
  styleUrls: ['./viewstudents.component.css']
})
export class ViewstudentsComponent implements OnInit {

  constructor() { }
  add=[{"name":"arun","rollnumber":12,"admissionnumber":334,"collegename":"marian","department":"BCA","bloodgroup":"B+","dateofbirth":2001-10-10,"parentname":"john","guardianname":"soman","emailid":"arun@gmail.com","address":"idukki p.o"},{"name":"manu","rollnumber":16,"admissionnumber":785,"collegename":"amaljyothi","department":"BCOM","bloodgroup":"AB-","dateofbirth":2001-12-12,"parentname":"paul","guardianname":"jacob","emailid":"manu@gmail.com","address":"kottayam p.o"},{"name":"arjun","rollnumber":90,"admissionnumber":377,"collegename":"Sn","department":"MBA","bloodgroup":"O+","dateofbirth":2001-5-1,"parentname":"vs","guardianname":"binu","emailid":"arjun@gmail.com","address":"cheruthony p.o"},{"name":"manju","rollnumber":45,"admissionnumber":880,"collegename":"deepa","department":"BBA","bloodgroup":"AB+","dateofbirth":2004-12-31,"parentname":"roja","guardianname":"alex","emailid":"manju@gmail.com","address":"vellakkayam p.o"}]

  ngOnInit(): void {
  }

}
