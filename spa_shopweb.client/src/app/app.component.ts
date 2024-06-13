import { HttpClient } from '@angular/common/http';
import { Binary } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

interface Items {
  image: Blob;
  price: number;
  contentType: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public items: Items[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.http.get<Items[]>('/items').subscribe(
      (result) => {
        this.items = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  title = 'spa_shopweb.client';
}
