import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import  'rxjs/add/operator/map';



@Injectable()
export class DataServiceService {

  constructor(
    private http: Http
  ) { }

  getCourses(){
    console.log("api function hit")
    return this.http.get('https://uxcobra.com/golfapi/courses.txt')
      .map((res: Response) =>res.json());
  }
}
