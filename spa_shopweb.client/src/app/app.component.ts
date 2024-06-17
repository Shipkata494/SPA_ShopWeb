import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
interface Item {
  id: string;
  price: number;
  contentType: string;
  imageData: string;
}
 interface MyData {
  Value: string[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: Item[] = [];
  sth: MyData | undefined;
  a: string[] = [];
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.returnImages();
    this.getItems();
  }
  getAssetsList(): Observable<MyData> {
    return this.http.get<MyData>('assets/assets-list.json');
  }
  returnImages(): void {
    this.getAssetsList().subscribe(
      (result) => {
        this.sth = result;
        this.a = result.Value
        }
    )
  }
  getItems(): void {
    this.http.get<Item[]>('/items').subscribe(
      (result) => {
        this.items = result;
        result.forEach(x => x.id = x.id.toUpperCase())
        result.forEach(i => this.a.filter(x => i.id == x.split('.')[0]).map(p=>i.imageData = p))
      },
      (error) => {
        console.error('Error fetching items:', error);
      }
    );
  }
}

