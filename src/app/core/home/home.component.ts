import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ICourse } from '../../models/courses';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courseList$!: ICourse[];

  constructor(private api: ApiService, private route: ActivatedRoute){}

  ngOnInit(): void {
    //this.api.getAllCourses().subscribe(res=> this.courseList$= res);
    //this.courseList$ = this.api.getAllCourses();
    this.courseList$ = this.route.snapshot.data['courses']
  }

}
