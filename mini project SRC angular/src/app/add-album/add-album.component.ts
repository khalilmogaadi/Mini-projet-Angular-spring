import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from '../model/album.model';
import { Genre } from '../model/genre.model';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
})
export class AddAlbumComponent implements OnInit{
newAlbum = new Album();
newIdGen! : number;
newGenre! : Genre;
genres!: Genre[];


constructor(private albumService: AlbumService ,private router :Router){}
  ngOnInit(): void {
this.albumService.listeGenres().
subscribe(gens => {console.log(gens);
         // this.genres = gens._embeded.genres;
}
);

  }

    addAlbum(){
      this.albumService.ajouterAlbum(this.newAlbum)
      .subscribe(prod => {
      console.log(prod);
      this.router.navigate(['Albums']);
      });

      this.newAlbum.genre = this.genres.find(cat => cat.idGen == this.newIdGen)!;
      this.albumService.ajouterAlbum(this.newAlbum).subscribe(prod => {
      console.log(prod);
      this.router.navigate(['Albums']);
      });

      }
      
  

}
