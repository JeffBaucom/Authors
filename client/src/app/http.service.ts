import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

    getAuthors() {
        return this._http.get('/authors');
    }

    getOneAuthor(id) {
        return this._http.get('/authors/' + id);
    }

    addAuthor(author) {
        return this._http.post('/authors', author);
    }

    editAuthor(author) {
        let url = '/authors/' + author._id;
        return this._http.put(url, author);
    }

    addQuote(id, quote) {
        let url = '/authors/' + id + '/quotes';
        return this._http.post(url, quote);
    }

    upvoteQuote(id, quote) {
        let url = '/authors/' + id + '/quotes/up';
        return this._http.put(url, quote);
    }

    downvoteQuote(id, quote) {
        let url = '/authors/' + id + '/quotes/down';
        return this._http.put(url, quote);
    }
}
