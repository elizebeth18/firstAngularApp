import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()


export class MusicService {

    private musicUrl = 'http://localhost:8905/artists';

    constructor(private http: HttpClient){}
    
    getArtist(): Observable<any[]>{
        return this.http.get<any[]>(this.musicUrl);
    }
}