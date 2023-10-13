import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notpagefound',
  templateUrl: './notpagefound.component.html',
  styleUrls: ['./notpagefound.component.css']
})
export class NotpagefoundComponent {

  constructor(private router: Router) { }

  goToHomePage() {
    this.router.navigate(['/home']);
  }

}
