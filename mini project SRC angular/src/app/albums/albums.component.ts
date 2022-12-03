import { Component, OnInit } from '@angular/core';
import { Album } from '../model/album.model';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
})
export class AlbumsComponent implements OnInit{
  albums! : Album[];
  


  constructor(private albumService: AlbumService ) {
    //this.albums = albumService.listeAlbums();
    }
  ngOnInit(): void {
  this.chargerAlbums();

  }
  chargerAlbums(){
    this.albumService.listeAlbums().subscribe(prods => {
    console.log(prods);
    this.albums = prods;
    }); 
    }
supprimerAlbum(p: Album)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.albumService.supprimerAlbum(p.idAlbum!).subscribe(() => {
console.log("album supprimé");
this.chargerAlbums();
});
} 



}
