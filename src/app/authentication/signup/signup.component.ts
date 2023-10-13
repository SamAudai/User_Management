import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('form', { static: false }) form!: NgForm;
  isSaved = false;

  constructor(public service: ApiService, private router: Router) {
    this.service.user={
      id: 0,
      userName: '',
      fullName: '',
      password: '',
      type: '',
      city: ''
    }
   }

  ngOnInit(): void {

  }

  onSubmit() {
    this.isSaved = true;
    this.service.addNewUser().subscribe(() => {
      this.service.logIn(this.service.user.userName, this.service.user.password);
      this.router.navigate([{outlets: {primary: ['home'], msg: ['messages']}}]);
    });
  }

  canDeactivate(): boolean {
    if (this.form.dirty === true && this.isSaved === false) {
      return window.confirm('لم يتم حفظ البيانات، هل تريد مغادرة الصفحة؟')
    }
    return true;
  }

}
