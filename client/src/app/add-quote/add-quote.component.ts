import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {

    quote = {text: ''};
    params: any;

    constructor(private router: Router, private _httpService: HttpService, private route: ActivatedRoute) { 
        this.route.params.subscribe( params => this.params = params);
    }

  ngOnInit() {
  }

    addQuote() {
        let observable = this._httpService.addQuote(this.params.id, this.quote);
        observable.subscribe(data => {
            console.log(data)
            this.router.navigate(['/show-quotes', this.params.id]);
        });
    }

}
