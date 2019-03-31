import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import * as myGlobals from '../globals';
var headers = new Headers();

@Injectable()
export class ListService {
  constructor(private http: Http) {}

 searchList(){
     var req={}
     return this.http.get(myGlobals.getList_URL, { headers: headers }).map(res => res.json());
  }
  selectList(autoId:any){
    return this.http.get(myGlobals.getList_URL+"/"+autoId, { headers: headers }).map(res => res.json());
  }

  addList(addListData:any){
    return this.http.post(myGlobals.getList_URL, addListData , { headers: headers }).map(res => res.json());
  }

  updateList(selectedId:any,updateListData:any){
    return this.http.post(myGlobals.getList_URL+"/"+selectedId+"/updates", updateListData , { headers: headers }).map(res => res.json());
  }

  deleteList(selectedId:any,activeRecord:any){
    return this.http.delete(myGlobals.getList_URL+"/"+selectedId+"/"+activeRecord+"/delete", { headers: headers }).map(res => res.json());
  }
}
