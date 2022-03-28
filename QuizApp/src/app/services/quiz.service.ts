import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      {
        id: 'data/javascript.json',
        name: 'JavaScript',
        description:
          "Let's Play javascript quiz that will help you clear the concepts and will prepare you for interviews. This is a basic level quiz and contains 10 Questions.",
        imageUrl: 'assets/images/JS.png',
      },
      {
        id: 'data/html.json',
        name: 'HTML',
        description:
          "Let's Play HTML quiz that will help you clear the concepts and will prepare you for interviews. This is a basic level quiz and contains 10 Questions.",
        imageUrl: 'assets/images/html.png',
      },
      {
        id: 'data/css.json',
        name: 'CSS',
        description:
          "Let's Play CSS quiz that will help you clear the concepts and will prepare you for interviews. This is a basic level quiz and contains 10 Questions.",
        imageUrl: 'assets/images/hero.png',
      },
    ];
  }
}
