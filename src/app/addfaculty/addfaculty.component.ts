import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrls: ['./addfaculty.component.css']
})
export class AddfacultyComponent implements OnInit {

  constructor() { }
  facultyname=""
  department=""
  desigination=""
  dateofbirth=""
  educationalquality=""
  address=""
  mobilenumber=""
  dateofjoin=""

  readvalues=()=>{
    let data={
      "facultyname":this.facultyname,
      "department":this.department,
      "desigination":this.desigination,
      "dateofbirth":this.dateofbirth,
      "educationalquality":this.educationalquality,
      "address":this.address,
      "mobilenumber":this.mobilenumber,
      "dateofjoin":this.dateofjoin
    }
    console.log(data)
  }
  ngOnInit(): void {
  }

}
