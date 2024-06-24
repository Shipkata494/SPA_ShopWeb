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
  templateUrl: './app.items.html',
  styleUrls: ['./app.items.css']
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

  OnHoverElement(event: Event,s:string) {
    const target = event.target as HTMLInputElement;
    let a = document.createElement('div');
    a.className = 'item-description';
    const cssString = `
    transition: opacity 0.5s linear, visibility 0.5s linear;
    background-color: lightblue;
    height: 100px;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
  `;
    a.style.cssText = cssString;
    a.textContent = s;
    requestAnimationFrame(() => {
      a.style.opacity = '1'; 
      a.style.visibility = 'visible';
    });
      target.appendChild(a);
      target.addEventListener('mouseleave', () => {
        a.style.opacity = '0'; 
        a.style.visibility = 'hidden'; 
        setTimeout(() => {
          target.removeChild(a);
        }, 500);
      });    
  }
}


