import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';
import { JsonTableComponent } from './json-table/json-table.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    // FaceSnapComponent
    // JsonTableComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  mySnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap("ISPITS WOW","Painful","https://i.pinimg.com/736x/c4/70/3e/c4703e6b004599f6b76f62f1442e6dd5.jpg",new Date(),5)
  }
}
