import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() isVisible:boolean
  @Output() toogleForm = new EventEmitter<boolean>()
  constructor() { 
  }

  ngOnInit() {
  }


  hideComponent(){
    console.log("called")
    this.isVisible = false
    console.log(this.isVisible)
    this.toogleForm.emit(this.isVisible)
  }
}
