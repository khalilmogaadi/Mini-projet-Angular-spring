import { Injectable } from '@angular/core';
import { Album } from '../model/album.model';
import { Genre } from '../model/genre.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenreWrapper } from '../model/GenreWrapped.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  apiURL: string = 'http://localhost:8082/album/api';
  apiURLGen: string = 'http://localhost:8082/album/gen';

  Albums!: Album[];
  album!: Album;
  genres! : Genre[];

  constructor(private http : HttpClient) {
    
    // this.genres= [ {idGen : 1, nomGen : "Pop music"},
    //                     {idGen : 2, nomGen : "Rock and roll"}]; 
    // this.Albums = [
    //   { idAlbum: 1, nomAlbum: "Thriller", prixAlbum: 40.6, dateCreation: new Date("01/14/2011"),genre : {idGen : 1, nomGen : "Pop music"}},
    //   { idAlbum: 2, nomAlbum: "Freedom", prixAlbum: 55, dateCreation: new Date("12/17/2010") ,genre : {idGen : 2, nomGen : "Rock and roll"}},
    //   { idAlbum: 3, nomAlbum: "NWA Compton", prixAlbum: 90.1, dateCreation: new Date("02/20/2020") ,genre : {idGen : 1, nomGen : "Pop music"}}
    // ];
  }
  
  listeAlbums(): Observable<Album[]>{
    return this.http.get<Album[]>(this.apiURL);
    }

 
  ajouterAlbum( prod: Album):Observable<Album>{
    return this.http.post<Album>(this.apiURL, prod, httpOptions);
    }
    
 
    supprimerAlbum(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); */
  
 
  consulterAlbum(id: number): Observable<Album> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Album>(url);
    }
    

  updateAlbum(prod :Album) : Observable<Album>
  {
  return this.http.put<Album>(this.apiURL, prod, httpOptions);
  }
  

  trierAlbums(){
    this.Albums = this.Albums.sort((n1,n2) => {
    if (n1.idAlbum! > n2.idAlbum!) {
    return 1;
    }
    if (n1.idAlbum !< n2.idAlbum!) {
    return -1;
    }
    return 0;
    });
    }
   
      listeGenres():Observable<Genre[]>{
        return this.http.get<Genre[]>(this.apiURL+"/gen");
        }

        listeCategories():Observable<GenreWrapper>{
          return this.http.get<GenreWrapper>(this.apiURLGen);
          }
          
    consulterGenre(id:number): Genre{ 
        return this.genres.find(gen => gen.idGen == id)!;
      }

      rechercherParGenre(idGen: number):Observable< Album[]> {
        const url = `${this.apiURL}/albmGen/${idGen}`;
        return this.http.get<Album[]>(url);
        }

        rechercherParNom(nom: string):Observable< Album[]> {
          const url = `${this.apiURL}/albsByName/${nom}`;
          return this.http.get<Album[]>(url);
          }
    }



