import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Photo {
  imageData:string
}
@Component({
  selector: 'gallery',
  templateUrl: './app.gallery.html',
  styleUrls: ['./app.gallery.css']
})
export class GalleryComponent implements OnInit {
  photos: Photo[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPhotos();
  }
  getPhotos(): void {
    this.http.get<Photo[]>('/gallery').subscribe(
      (result) => {
        this.photos = result;
      },
      (error) => {
        console.error('Error fetching items:', error);
      }
    );
  }
}
