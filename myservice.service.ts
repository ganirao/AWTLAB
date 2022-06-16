import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  emps=[
    {"empid":"143","empname":"ganesh","salary":50000},
    {"empid":"134","empname":"nagesh","salary":40000}
  ]
  constructor() { }
  getEmps()
  {
    return this.emps
  }
  deleteEmp(id:string)
  {
    this.emps.forEach((ele,index)=>
    {
      if(ele.empid==id)
      this.emps.splice(index,1)
    })
    return this.emps
  }
  addEmp(myf:any){
    this.emps.push(myf.value);
    return this.emps;
  }
}
