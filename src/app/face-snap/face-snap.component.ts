import { Component,Input , OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  imports: [

  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  createAt!: Date;
  snaps!: number;
  imgUrl!: string;
  snaped!: boolean;
  message!: string;

  ngOnInit(): void {
    this.snaps = 9;
    this.snaped = false;
    this.message = "Oh Snap!"
  }

  onAddSnap():void {

    if (this.snaped){
    this.snaps--;
    this.message = "Oops, un Snap!"
    this.snaped = false

    }else{
      this.snaps++;
      this.message = "Oops, unSnap!"
      this.snaped = true

    }
  }
}
