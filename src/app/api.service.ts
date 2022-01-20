import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getGithubUserDetails(username: string | undefined) {
    return this.http.get(`https://api.github.com/users/${username}`);
  }
}
