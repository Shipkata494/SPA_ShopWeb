import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
interface Item {
  id: string;
  title: string;
  price: number;
  contentType: string;
  imageData: string;
}
 interface MyData {
  Value: string[];
}
@Component({
  selector: 'items',
  templateUrl: './app.items.html',
  styleUrls: ['./app.items.css']
})

export class ItemComponent implements OnInit {
  items: Item[] = [];
  sth: MyData | undefined;
  a: string[] = [];
  title = 'AngularRouting';
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.returnImages();
    this.getItems();
    this.activatedRoute.fragment.subscribe((fragment: string | null) => {
      if (fragment) this.jumpToSection(fragment);
    });
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
    const cssString = `
    display:inline-block;
    float:left;
    font-size: 15px;
    color: red;
  `;
    a.style.cssText = cssString;
    a.textContent = s;
      target.appendChild(a);
      target.addEventListener('mouseleave', () => {
          target.removeChild(a);
      });    
  }
  jumpToSection(section: string | null) {
    if (section) document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}


