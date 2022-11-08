import { Component, OnInit } from '@angular/core';
import { Comic } from '../comic';
import { ComicService } from '../comic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  comic:Comic;
  imageSRc:string="";
  constructor(_comicService:ComicService) { 
    this.comic = _comicService.comicData ; 
    this.imageSRc = _comicService.comicData.image;
    console.log(this.imageSRc);
  }
    
  ngOnInit(): void {
  }

}
