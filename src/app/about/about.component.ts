import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  profilePicture: string = '';

  ngOnInit(): void {
    // Randomly select between C1.jpg and C2.jpg with 50/50 chance
    this.profilePicture = Math.random() < 0.5 
      ? 'assets/picture/C1.jpg' 
      : 'assets/picture/C2.jpg';
  }
}
