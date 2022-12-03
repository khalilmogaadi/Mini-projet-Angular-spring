import { Genre } from "./genre.model";

export class Album {
  
    idAlbum? : number;
    nomAlbum? : string;
    prixAlbum? : number;
    dateCreation? : Date ;
    genre! : Genre;

    }
    