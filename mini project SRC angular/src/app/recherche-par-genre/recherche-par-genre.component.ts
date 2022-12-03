import { Component, OnInit } from '@angular/core';
import { Album } from '../model/album.model';
import { Genre } from '../model/genre.model';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-recherche-par-genre',
  templateUrl: './recherche-par-genre.component.html',
  styles: [
  ]
})
export class RechercheParGenreComponent implements OnInit {
  albums! : Album[];
  IdGenre! : number;
  genres! : Genre[];
  
  constructor(private albumService :AlbumService ) { }

  ngOnInit(): void {
    this.albumService.listeCategories().
      subscribe(gens => {this.genres = gens._embedded.genres;
        console.log(gens);
                   });
  }
  onChange() {
    this.albumService.rechercherParGenre(this.IdGenre).
    subscribe(albs =>{this.albums=albs});
    
    }
    
}
