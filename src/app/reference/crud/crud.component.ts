import { Component, OnInit ,ViewChild} from '@angular/core';
import {Popup} from 'ng2-opd-popup';
import { ListService } from '../../_service/list.service';
import { Http } from '@angular/http';
import { AnalysisService } from '../../_service/analysis.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  @ViewChild('popup1') popup1: Popup;
  @ViewChild('popup2') popup2: Popup;

  constructor(private listService:ListService) {

  }
  list:any;
  allList:any;
  selectedId:any;
  selectedList:any;
  successMsg:any;
  activeRecord:any;
  activeRecordText:any;
  dummy:any;
  ngOnInit() {
    this.dummy = "dummy";
    this.list = {
      name:"",
      email:"",
      phone:""
    }
    this.allList="";
    this.selectedList = {
      "name":"",
      "email":"",
      "phone":""
    };
    this.getFullList("");
  }

  addListPopup(){
    this.popup1.options = {
      header: "Add List",
      color: "#465b66", 
      widthProsentage:30,
      animationDuration: 0.1,
      showButtons: false,
      confirmBtnContent: "OK",
      cancleBtnContent: "Cancel",
      confirmBtnClass: "btn btn-default",
      cancleBtnClass: "btn btn-default",
      animation: "fadeInDown"
    };
    this.popup1.show(this.popup1.options);
  }

  editListPopup(){
    this.popup2.options = {
      header: "Edit List",
      color: "#465b66", 
      widthProsentage:30,
      animationDuration: 0.1,
      showButtons: false,
      confirmBtnContent: "OK",
      cancleBtnContent: "Cancel",
      confirmBtnClass: "btn btn-default",
      cancleBtnClass: "btn btn-default",
      animation: "fadeInDown"
    };
    this.popup2.show(this.popup2.options);
  }

  addList(value:any){
    this.list.name = value.name;
    this.list.email = value.email;
    this.list.phone = value.phone;

    this.listService.addList(this.list).subscribe(data => {
      var result = data.result;
      if(result=="success"){
        this.getFullList(data.lastInsertedId);
        this.successMsg = result;
        setTimeout(()=>{ 
          this.successMsg="";
        },2000);
      }
    },
      err => console.log(err),
      () => {
      }
    );
  }

  editList(value:any){
    this.list.name = value.editName;
    this.list.email = value.editEmail;
    this.list.phone = value.editPhone;
    

    this.listService.updateList(this.selectedId,this.list).subscribe(data => {
      var result = data.result;
      if(result=="success"){
        this.getFullList(data.lastInsertedId);
        this.successMsg = result;
        setTimeout(()=>{ 
          this.successMsg="";
        },2000);
      }
    },
    err => console.log(err),
    () => {
      
    });
  }

  deleteList(){
    this.listService.deleteList(this.selectedId,this.activeRecord).subscribe(data => {
      var result = data.result;
      if(result=="success"){
        this.getFullList(data.lastInsertedId);
        this.activeRecord = data.active;
        this.activeRecord==1?this.activeRecordText = "Active":this.activeRecordText = "Deactive";
        this.successMsg = result;
        setTimeout(()=>{ 
          this.successMsg="";
        },2000);
      }
    },
    err => console.log(err),
    () => {
      
    });
  }

  cancelPopup1(addForm){
    this.popup1.hide();
    addForm.reset();
    this.successMsg="";
  }
  cancelPopup2(){
    this.popup2.hide();
  }

  getFullList(lastInsertedId:any){
    this.listService.searchList().subscribe(data => {
      if(data.result.length>0){
        this.allList=data.result;
        this.selectedList=data.result[0];
        if(lastInsertedId==""){
          this.selectedId = data.result[0]._id;
          this.activeRecord = data.result[0].active;
          this.activeRecord==1?this.activeRecordText = "Active":this.activeRecordText = "Deactive";
        }else{
          this.selectedId = lastInsertedId;
        }
      }
    },
      err => console.log(err),
      () => {
      }
    );
  }

  selectList(autoId:any){
    this.selectedId = autoId;
    this.listService.selectList(autoId).subscribe(data => {
      this.selectedList=data.result[0];
      this.activeRecord = data.result[0].active;
      this.activeRecord==1?this.activeRecordText = "Active":this.activeRecordText = "Deactive";

    },
      err => console.log(err),
      () => {
      }
    );
  }

}
