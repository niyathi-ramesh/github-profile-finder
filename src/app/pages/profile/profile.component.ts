import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/api.service';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  profile: any = {};
  error = '';
  subscription: any;
  constructor(
    private router: Router,
    private sessionService: SessionService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.subscription = this.apiService
      .getGithubUserDetails(this.sessionService.getUserData().githubUsername)
      .subscribe({
        next: (data) => {
          this.profile = data;
        },
        error: (err) => {
          this.error = 'Oops! No User Found.';
        },
      });
  }

  goHome() {
    this.sessionService.clearUserData();
    this.router.navigate(['/introduction']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
