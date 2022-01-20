import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserForm } from 'src/app/app.model';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  userData: UserForm;
  searchForm = this.fb.group({
    email: [''],
    agree: [''],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private sessionService: SessionService
  ) {
    this.userData = this.sessionService.getUserData();
  }

  ngOnInit(): void {}

  back() {
    this.router.navigate(['/enroll']);
  }

  next() {
    this.sessionService.saveUserData({
      ...this.userData,
      ...this.searchForm.value,
    });
    this.router.navigate(['/profile']);
  }
}
