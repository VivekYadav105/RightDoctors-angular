import { Component,ViewChild } from '@angular/core';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'task1-angular';
  isFormVisble = false
  isEditVisble = false
  editId:number
  @ViewChild(FormComponent,{static:true}) 
  formComponent: FormComponent;
  users:Array<{id:number,name:string,mobileNo:string,age:number,gender:string}>

  constructor(){
    if(localStorage.getItem("rightDoctorsItem")){
      this.users = JSON.parse(localStorage.getItem("rightDoctorsItem"))
    }
    else localStorage.setItem("rightDoctorsItem","")
  }

  toogleCreateForm(){
    this.isFormVisble = !this.isFormVisble
  }
  closeCreateForm(isVisible:boolean){
    this.isFormVisble = isVisible
  }
  closeEditForm(isVisible:boolean){
    this.isEditVisble = isVisible
  }
  toogleEditForm(id){
    this.editId = id
    this.isEditVisble = !this.isEditVisble
  }
  deleteUser(id){
    this.users.filter((user)=>user.id!==id)
  }
  editUser(user:{id:number,name:string,mobileNo:string,age:number,gender:string}){
    this.users.filter((ele)=>{
      if(ele.id!==user.id) return ele
      else return user
    })
  }
}
