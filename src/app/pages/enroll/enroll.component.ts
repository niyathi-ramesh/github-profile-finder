import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.scss'],
})
export class EnrollComponent implements OnInit {
  enrollForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    githubUsername: [''],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {}

  back() {
    this.router.navigate(['/introduction']);
  }

  next() {
    this.sessionService.saveUserData(this.enrollForm.value);
    this.router.navigate(['/search']);
  }
}
