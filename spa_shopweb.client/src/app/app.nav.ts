import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SidebarService } from './app.sidebar-service';
@Component({
  selector: 'cnav',
  templateUrl: './app.nav.html',
  styleUrls: ['./app.nav.css']
})
export class NavComponent implements OnInit {
  status: boolean = false;
  constructor(private http: HttpClient, private sidebarService: SidebarService) { }
  ngOnInit(): void {
    this.sidebarService.currentStatus.subscribe(status => {
      this.status = status;
    });
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
  
}
