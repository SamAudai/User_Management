import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IUser } from 'src/app/models/users';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit, OnChanges {

  @Input() users$!: Observable<IUser[]>;
  @Input() fullUsersList$!: Observable<IUser[]>;
  @Input() inputSearch!: string;
  selectedUser!: string;

  constructor(private router: Router, private activatedRout: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedUser= this.activatedRout.snapshot.paramMap.get('name')!;
  }
  
  ngOnChanges(): void {
    if (this.inputSearch) {
      this.users$.subscribe(data => {
        const result = data.filter(user =>
          user.fullName.toLocaleLowerCase().indexOf(this.inputSearch.toLocaleLowerCase()) !== -1);
        this.users$ = of(result);
      });
    } else {
      this.users$ = this.fullUsersList$;
    }

  }
  
  viewDetails(id:number){
    //this.router.navigate(['users', 'user_details', id]);
    //this.router.navigate(['/users/user_details', id]);
    //this.router.navigate(['../users/user_details', id ]);

    //Absolute Route
    /* this.router.navigate(['../users/user_details', id], {
      //use query parameters
      queryParams: {searchText: this.inputSearch}
    }); */

    //Relative Route
    this.router.navigate(['./user_details', id], {
      relativeTo: this.activatedRout,
      skipLocationChange: true,
      //use query parameters
      queryParams: {searchText: this.inputSearch}
    });
  }

}
