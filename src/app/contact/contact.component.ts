import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  image_src:string="assets/images/icon-profile.png" ;

  custom_style:object ={
    backgroundColor:'red', 
    display: 'flex',
    padding:'10px',
    borderRadius: "24px"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
