import { Injectable } from '@angular/core';
import {Comic} from './comic'
@Injectable({
  providedIn: 'root'
})
export class ComicService {
 
  comicData:Comic= {
    image: "http://i.annihil.us/u/prod/marvel/i/mg/6/c0/59f1071a996cb.jpg",
    title: "Peter Parker: The Spectacular Spider-Man (2017)",
    penciler: "Vc Travis Lanham",
    writer: "Ian Herring",
    description: "J. Jonah Jameson’s got the scoop of the century — a once-in-a-lifetime interview with the menace of Manhattan…SPIDER-MAN! PETER PARKER: THE SPECTACULAR SPIDER-MAN, MY DINNER WITH JAMESON is one tale you won’t want to miss!",
    published: "Wed Nov 01 2017",
    coverArtist: 'Vc Travis Lanham'
  }
  constructor() { }
  
}
