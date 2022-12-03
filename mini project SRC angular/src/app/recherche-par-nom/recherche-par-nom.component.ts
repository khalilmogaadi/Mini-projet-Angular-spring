import { Component, OnInit } from '@angular/core';
import { Album } from '../model/album.model';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit{
  albums! : Album[];
  nomAlbum! : string;

  constructor(private albumService :AlbumService ) { }
  ngOnInit(): void {
  }

  
  rechercherAlbs(){
    this.albumService.rechercherParNom(this.nomAlbum).
    subscribe(prods => {
    this.albums = prods; 
    console.log(prods)});
    }

}
