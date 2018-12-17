import { Component, OnInit, Pipe } from '@angular/core';
import { AnalysisService } from '../../_service/analysis.service';

export class User{
    name:string;
    phone:string;
    dob:string
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
  imageUrl:string = "";
  enventBinding:any;
  person:any;
  serviceRes:any;

  user: User = {
    name:"Raja",
    phone:"9876543210",
    dob:"10/12/1991"
  }

  
  
  constructor(private analysisService:AnalysisService) { 

  }
  ngOnInit() {
    this.fruits = {
      varieties:["Apple","Blueberry","Grape","Orange","Gooseberry"]
    }
    this.person = [{
      name:"Raja",
      country:"India",
    },{
      name:"Albin",
      country:"UK",
    },
    {
      name:"Bharathi",
      country:"US",
    },
    {
      name:"Raj",
      country:"US",
    },
    {
      name:"Priya",
      country:"China",
    },{
      name:"Kavitha",
      country:"India",
    }]

    this.editMode = false;
    this.enventBinding = {
      "focus":"",
      "blur":"",
      "submit":"",
      "scroll":"",
      "cut":"",
      "copy":"",
      "paste":"",
      "keydown":"",
      "keypress":"",
      "keyup":"",
      "mouseenter":"",
      "mousedown":"",
      "mouseup":"",
      "click":"",
      "dblclick":""
    }
    this.serviceRes="";
  }

  submitForm(value: any){
    this.user.phone = value.phone;
  }
  editForm(){
    this.editMode = true;
  }
  viewForm(){
    this.editMode = false;
  }

  focusEvent(){
    this.enventBinding.focus='focused';
  }
  blurEvent(){
    this.enventBinding.blur='blur works';
  }
  sumbitEvent(){
    this.enventBinding.submit = "submitted";
  }
  scrollEvent(){
    this.enventBinding.scroll = "scroll works";
  }
  cutEvent(){
    this.enventBinding.cut = "cut works";
  }
  copyEvent(){
    this.enventBinding.copy = "copy works";
  }
  pasteEvent(){
    this.enventBinding.paste = "paste works";
  }
  keydownEvent(){
    this.enventBinding.keydown = "keydown works";
  }
  keypressEvent(){
    this.enventBinding.keypress = "keypress works";
  }
  keyupEvent(){
    this.enventBinding.keyup = "keyup works";
  }
  mouseenterEvent(){
    this.enventBinding.mouseenter = "mouseenter works";
  }
  mousedownEvent(){
    this.enventBinding.mousedown = "mousedown works";
  }
  mouseupEvent(){
    this.enventBinding.mouseup = "mouseup works";
  }
  clickEvent(){
    this.enventBinding.click = "click works";
  }
  dblclickEvent(){
    this.enventBinding.dblclick = "double works";
  }

  serviceDemo(){
    this.serviceRes=this.analysisService.data();
  }
  clearServiceDemo(){
    this.serviceRes="";
  }
}
