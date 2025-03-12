import { Component } from '@angular/core';
import { MainCardService } from '../../../services/main-card.service';

@Component({
  selector: 'app-redirectpage',
  templateUrl: './redirectpage.component.html',
  styleUrls: ['./redirectpage.component.scss']
})
export class RedirectpageComponent {
address : any
  constructor(private _service : MainCardService){}

  ngOnInit(){
    this._service.changelocationObv(window.location.pathname)
}
}
