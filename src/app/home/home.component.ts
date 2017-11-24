import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { slideFromTop,slideFromRight,slideFromBottom,slideFromLeft } from '../_animations/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [slideFromTop,slideFromRight,slideFromBottom,slideFromLeft]
})
export class HomeComponent {
  currentValue: number;
  slideFromTopState: string = 'offScreen';
  slideFromRightState: string = 'offScreen';
  slideFromBottomState: string = 'offScreen';
  slideFromLeftState: string = 'offScreen';

  constructor() { }

  slideInAnimation(origin: number) {
    if(origin === 1)
      this.slideFromTopState = (this.slideFromTopState === 'offScreen' ? 'onScreen' : 'offScreen');
    if(origin === 2)
      this.slideFromRightState = (this.slideFromRightState === 'offScreen' ? 'onScreen' : 'offScreen');
    if(origin === 3)
      this.slideFromBottomState = (this.slideFromBottomState === 'offScreen' ? 'onScreen' : 'offScreen');
    if(origin === 4)
      this.slideFromLeftState = (this.slideFromLeftState === 'offScreen' ? 'onScreen' : 'offScreen');
  }
}
