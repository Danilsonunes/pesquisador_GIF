import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  constructor(private http: HttpClient) {}

  private key = 'KqXby4XR9ieZJOsD6wJ2mHQj3cfJ2Nsb';
  private limite = '24';
  private url = 'https://api.giphy.com/v1/gifs/search';

  getGifs(d) {
    let url = `${this.url}?api_key=${this.key}&q=${d}&limit=${this.limite}&offset=25&rating=r&lang=en`;

    return this.http.get(url);
  }
}
