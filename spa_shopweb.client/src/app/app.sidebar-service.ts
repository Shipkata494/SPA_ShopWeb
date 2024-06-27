import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarStatus = new BehaviorSubject<boolean>(false);
  currentStatus = this.sidebarStatus.asObservable();

  toggleSidebar() {
    const currentStatus = this.sidebarStatus.value;
    this.sidebarStatus.next(!currentStatus);
    console.log(!currentStatus);
  }
}
