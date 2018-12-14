import { Component, OnInit } from '@angular/core';

export class User{
    name:string;
    phone:string
}

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  name:any;
  fruits:any;
  editMode:any;

  user: User = {
    name:"Raja",
    phone:"9876543210"
  }
  
  constructor() { 

  }
  ngOnInit() {
    this.fruits = {
      varieties:["Apple","Blueberry","Grape","Orange","Gooseberry"]
    }
    this.editMode = false;
  }

  submitForm(value: any){
    this.user.phone = value.phone;
  }

}
