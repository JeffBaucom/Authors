import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

    getAuthors() {
        return this._http.get('/authors');
    }

    addAuthor(author) {
        return this._http.post('/authors', author);
    }
}
