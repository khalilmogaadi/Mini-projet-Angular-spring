import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlbumComponent } from './add-album/add-album.component';
import { AlbumsComponent } from './albums/albums.component';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { UpdateAlbumComponent } from './update-album/update-album.component';

const routes: Routes = [
  {path: "Albums", component : AlbumsComponent},
  {path: "add-album", component : AddAlbumComponent},
  {path: "", redirectTo: "Albums", pathMatch: "full" },
  {path: "updateAlbum/:id", component: UpdateAlbumComponent},
  {path: "rechercheParGenre", component : RechercheParGenreComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
