import { Component, OnInit } from '@angular/core';
import { contact } from './contact.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  contacts : contact [] = [];
  ngOnInit(): void {
     fetch('http://localhost:3006/contacts')
     .then(r=>r.json())
     .then(data=>{
       this,this.contacts=data
     })
  }
  title = 'angular-mfe';

}
