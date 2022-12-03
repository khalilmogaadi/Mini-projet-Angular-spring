import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from '../model/album.model';
import { Genre } from '../model/genre.model';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-update-album',
  templateUrl: './update-album.component.html',
  styles: [
  ]
})
export class UpdateAlbumComponent implements OnInit {
  currentAlbum = new Album();
  genres!: Genre[];
  updatedGenId!: number;


  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,  
    private albumService: AlbumService) { }
  ngOnInit(): void {
//////////////
this.albumService.listeCategories().
subscribe(cats => {console.log(cats);
this.genres = cats._embedded.genres;
}
);
this.albumService.consulterAlbum(this.activatedRoute.snapshot.params['id']).subscribe(prod =>{ this.currentAlbum = prod; 
this.updatedGenId = this.currentAlbum.genre.idGen;
} ) ;



  }
  updateAlbum() { //console.log(this.currentProduit);
    this.albumService.consulterAlbum(this.activatedRoute.snapshot.params['id']).subscribe(prod => { this.currentAlbum = prod; });
    this.router.navigate(['Albums']);


    this.currentAlbum.genre = this.genres.
      find(cat => cat.idGen == this.updatedGenId)!;
    this.albumService.updateAlbum(this.currentAlbum).subscribe(prod => {
      this.router.navigate(['Albums']);
    }
    );
  }
}
