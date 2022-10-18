import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewfaculty',
  templateUrl: './viewfaculty.component.html',
  styleUrls: ['./viewfaculty.component.css']
})
export class ViewfacultyComponent implements OnInit {

  constructor() { }
  root=[{"facultyname":"manu","department":"BCA","desigination":"teacher","dateofbirth":"2001-02-07","educationalquality":"B-ED","address":"idukki p.o","mobilenumber":9526689776,"dateofjoin":"2014-07-12"},{"facultyname":"Donjith","department":"BCOM","desigination":"Lecture","dateofbirth":"2012-12-14","educationalquality":"TTC","address":"kottayam p.o","mobilenumber":8467823776,"dateofjoin":"2015-09-18"},{"facultyname":"soman","department":"BBA","desigination":"teacher","dateofbirth":"2004-11-31","educationalquality":"B-ED","address":"vellakkayam p.o","mobilenumber":8704589776,"dateofjoin":"2013-08-30"},{"facultyname":"manju","department":"BCOM","desigination":"Lecture","dateofbirth":"2012-10-25","educationalquality":"TTC","address":"kollam p.o","mobilenumber":8990343776,"dateofjoin":"2017-09-19"}]

  ngOnInit(): void {
  }

}
