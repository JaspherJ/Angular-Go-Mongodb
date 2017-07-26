import {EventEmitter, Injectable} from "@angular/core";
import {Http,Response,Headers} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class AppService{
    constructor(private http:Http){}

getMessages(){
   // const headers = new Headers({'Content-Type':'application/json'});
    return this.http.get("http://localhost:8080/comments")
        .map(res => res.json());

}
addMessages(){

}
}