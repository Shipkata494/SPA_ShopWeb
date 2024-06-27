import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SidebarService } from './app.sidebar-service';
@Component({
  selector: 'chead',
  templateUrl: './app.head.html',
  styleUrls: ['./app.head.css']
})
export class HeadComponent implements OnInit {

  constructor(private http: HttpClient, private service: SidebarService) { }

  ngOnInit(): void {
    this.showMenu();
  }
  showMenu() {
    this.service.toggleSidebar();
  }
}
