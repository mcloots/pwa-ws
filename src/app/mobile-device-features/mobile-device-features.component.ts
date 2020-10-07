import { Component, HostListener, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-mobile-device-features',
  templateUrl: './mobile-device-features.component.html',
  styleUrls: ['./mobile-device-features.component.scss']
})
export class MobileDeviceFeaturesComponent implements OnInit {
  lat: number;
  lng: number;

  gamma: number;
  beta: number;
  alpha: number;

  batterymanager: number[] = [];

  constructor() {
    
  }

  @HostListener('window:deviceorientation', ['$event'])
  onOrientationChange(event) {
    this.alpha = event.alpha;
    this.beta = event.beta;
    this.gamma = event.gamma;
  }


  ngOnInit(): void {
  }

  getGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

        alert(this.lat + " " + this.lng);
      }, error => {
        alert(error.message);
      });
    }
  }

  showOrientation() {
    alert(this.alpha + " " + this.beta + " " + this.gamma);
  }

  vibrate() {
    // vibrate for 1 second
    if(navigator.vibrate(1000)) {
      alert('Get ready for some vibes');
    } else {
      alert('No vibes for you!');
    }
  }

  getBattery() {
    (navigator as any).getBattery().then(data => {
      this.batterymanager.push(data.level);
    });
  }

}
