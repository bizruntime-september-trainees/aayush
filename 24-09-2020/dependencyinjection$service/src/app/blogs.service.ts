import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Blogpost } from './blogpost';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  serveUrl =""

  constructor() { }
}
