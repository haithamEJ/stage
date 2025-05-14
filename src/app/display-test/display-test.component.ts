import { Component , inject, OnInit} from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-display-test',
  imports: [HttpClientModule],
  templateUrl: './display-test.component.html',
  styleUrl: './display-test.component.scss'
})
export class DisplayTestComponent implements OnInit{
 httpClient = inject(HttpClient);
    data = [];

  ngOnInit(): void {
    this.fetchData();
  }

   fetchData(){
      this.httpClient.get('http://localhost:3000/getData').subscribe((data:any)=>{
        console.log(data)
        this.data = data;
    });
  }
}
