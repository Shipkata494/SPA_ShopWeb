import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cnav',
  templateUrl: './app.nav.html',
  styleUrls: ['./app.nav.css']
})
export class NavComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.openMenu();
  }
  openMenu(): void {
    const menu = document.getElementById("menu");
    const div = document.createElement('div');
    div.textContent = 'dfsafs';
    menu?.addEventListener('click', () => {
      console.log('sth');
    });
  }
}
