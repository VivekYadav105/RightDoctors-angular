import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ViewChild } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { EditComponent } from './edit/edit.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,FormsModule,CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
