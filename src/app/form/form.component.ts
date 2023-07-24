import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // isComponentVisible:boolean
  @Input() isVisible = false
  @Output() toolgeForm = new EventEmitter<boolean>();

  ngOnInit() {
  }

  hideComponent(){
    console.log("called")
    this.isVisible = false
    console.log(this.isVisible)
    this.toolgeForm.emit(this.isVisible)
  }

  createUser(){
    
  }

}
