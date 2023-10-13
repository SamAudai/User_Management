import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { ICourse } from 'src/app/models/courses';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css']
})
export class EditcourseComponent implements OnInit {

  courses$!: ICourse[];

  constructor(private service: ApiService, private route: ActivatedRoute){}

  ngOnInit(): void {
    //this.service.getAllCourses().subscribe(res=> this.courses$= res); //use service to fetch data
    this.courses$ = this.route.parent?.snapshot.data['courses']; //use resolver guard to fetch data
  }

}
