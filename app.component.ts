import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectdemo';
 //empid="122";
  //empname="Ganesh";
  //salary=500000;
  // emps=[
  //   {"empid":143,"empname":"ganesh","salary":50000},
  //   {"empid":134,"empname":"nagesh","salary":40000}
  // ]
  emps:any[]=[]

  constructor(public myservice:MyserviceService){

  }

  fetchEmps(){
    this.emps=this.myservice.getEmps()
  }
  deleteEmps(id:string)
  {
    this.emps=this.myservice.deleteEmp(id)
  }
  SubmitForm(myf:any){
    this.emps=this.myservice.addEmp(myf)
  }
}
