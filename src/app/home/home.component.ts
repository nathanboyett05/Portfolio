import { Component } from '@angular/core';
import { ParticlesConfig } from './particles-config';
declare let particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  ngOnInit(): void {
    this.invokeParticles();
  }



  invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }
}
