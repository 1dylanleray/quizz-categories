import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categoryContent: any[] = [];
  playerCategories: { questionId: number; answer: string }[] = [];
  score = 0;
  isQuizFinished = false;
  playerName: string = '';

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http
      .get<any>('http://localhost:3000/categories')
      .pipe(
        map((data: any) =>
          data.map((category: any) => Object.keys(category)[1])
        )
      );
  }
}
