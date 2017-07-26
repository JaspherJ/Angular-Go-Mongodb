import { Component,OnInit } from '@angular/core';
import {AppService} from "./service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
    constructor(private service:AppService){}

    ngOnInit(){
        this.service.getMessages().subscribe(res => console.log(res));
    }
}