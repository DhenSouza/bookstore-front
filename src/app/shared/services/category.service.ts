import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl: string = environment.baseUrl

  constructor(
    private http: HttpClient
  ) {}
    // AINDA IREI IMPLEMENTAR O TOKEN 
  // token = {
  //   headers: new HttpHeaders().set('Authorization', environment.token)
  // }

    findAll(): Observable<Category[]> {
      const url = this.baseUrl + '/categories'
      return this.http.get<Category[]>(url);
    }

    create(category: Category): Observable<Category> {
      const url = this.baseUrl + '/categories'
      return this.http.post<Category>(url, category);
    }

    findById(id: String): Observable<Category> {
      const url = this.baseUrl + `/categories/${id}`
      return this.http.get<Category>(url)
    }

    update(category: Category): Observable<void> {
      const url = this.baseUrl + `/categories/${category.id}`
      return this.http.put<void>(url, category);
    }

    delete(id: String): Observable<void> {
      const url = this.baseUrl + `/categories/${id}`
      return this.http.delete<void>(url);
    }

}
