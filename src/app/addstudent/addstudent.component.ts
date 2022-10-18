import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor() { }
  name=""
  rollnumber=""
  admissionnumber=""
  collegename=""
  department=""
  bloodgroup=""
  dateofbirth=""
  parentname=""
  guardianname=""
  emailid=""
  address=""
  readvalues=()=>{
    let data={
      "name":this.name,
      "rollnumber":this.rollnumber,
      "admissionnumber":this.admissionnumber,
      "collegename":this.collegename,
      "department":this.department,
      "bloodgroup":this.bloodgroup,
      "dateofbirth":this.dateofbirth,
      "parentname":this.parentname,
      "guardianname":this.guardianname,
      "emailid":this.emailid,
      "address":this.address
    }
    console.log(data)
  }
  ngOnInit(): void {
  }

}
