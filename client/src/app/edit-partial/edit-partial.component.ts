import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit-partial',
  templateUrl: './edit-partial.component.html',
  styleUrls: ['./edit-partial.component.css']
})
export class EditPartialComponent implements OnInit {
    @Input() author: any;
    @Output() submitted = new EventEmitter<boolean>();

    constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

    submitEdit() {
        let observable = this._httpService.editAuthor(this.author);
        observable.subscribe(data => console.log(data));
        this.submitted.emit(true);

    }
    cancel() {
        this.submitted.emit(true);
    }


}
