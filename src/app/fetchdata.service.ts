import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FetchdataService {
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}

@Injectable()
export class userService {
  constructor(private http: HttpClient) {}
  getRecord() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
