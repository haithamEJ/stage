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
    this.faceSnap = {
      title: 'Beautiful Sunset',
      description: 'A stunning sunset over the mountains',
      imgUrl: 'https://i.pinimg.com/736x/29/8a/89/298a89a74673703411f7632cf3832465.jpg',
      createAt: new Date(),
      snaps: 0,
    };
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
