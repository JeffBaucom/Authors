import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-quotes',
  templateUrl: './show-quotes.component.html',
  styleUrls: ['./show-quotes.component.css']
})
export class ShowQuotesComponent implements OnInit {

    constructor(private route: ActivatedRoute) { 
        this.route.params.subscribe( params => console.log(params));
    }

  ngOnInit() {
  }

}
