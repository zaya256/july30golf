import { Component, OnInit } from '@angular/core';
import { DataServiceService} from "../../services/data-service.service";


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: any;

  constructor(
    private dataService: DataServiceService
  ) { }

  ngOnInit() {
    this.getCourseData()
    console.log(this.courses);



  }
getCourseData(){
    //console.log("course data functions");
  this.dataService.getCourses().subscribe((data)=>{
    //console.log(data);
    this.courses = JSON.stringify(data);
  })
}

}
