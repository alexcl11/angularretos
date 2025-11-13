import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Observable } from "rxjs";
import { FileModel } from "../models/FileModel";

@Injectable()
export class ApiService{
    public url:string

    constructor(private _http:HttpClient){
        this.url = environment.url
    }

    uploadFile(fileModel: FileModel): Observable<any>{
        let request = "api/testingfiles"
        let json = JSON.stringify(fileModel)
        let header = new HttpHeaders().set("Content-type","application/json")
        return this._http.post(this.url+request, json, {headers:header})
    }

}