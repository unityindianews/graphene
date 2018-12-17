import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  constructor() { }
  user:any;
  ngOnInit() {
    this.user={
      firstname:"",
      lastname:""
    }
  }
formValidation(value:any)
{
  this.user.firstname=value.firstname;
  this.user.lastname=value.lastname;
 console.log(value.lastname);
}
}
